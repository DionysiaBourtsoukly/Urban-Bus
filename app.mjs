//Express.js
import express from 'express'
import { query } from 'express';
//Handlebars (https://www.npmjs.com/package/express-handlebars)
import { engine } from 'express-handlebars';
import { watch } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as logInController from './controller/login-controller.mjs'
import urbanBusSession from './app-setup/app-setup-session.mjs'
import * as userModel from './model/urban-bus-model.mjs'

const app = express()
const router = express.Router();
//mapboxgl

//Δηλώνουμε πως ο φάκελος public θα περιέχει τα στατικά αρχεία
//π.χ. το http://127.0.0.1:3000/style.css θα επιστρέψει 
//το αρχείο /public/style.css
app.use(express.static('public'))
// app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)),'../public')));
// app.use('/mjs',express.static('/public/mjs'));

//Χρήση της Handlebars σαν template engine
//Σημ.: η engine πρέπει να έχει ίδιο όνομα με το extname, για να αναγνωριστεί το extname 
//(το κάνουμε αυτό για να έχουμε αρχεία με κατάληξη .hbs / το default είναι .handlebars)
app.engine('hbs', engine({ extname: 'hbs' }));
app.engine('mjs', engine({ extname: 'mjs' }));

app.use(express.urlencoded({ extended: false }));
app.use(urbanBusSession);

//Ορίζουμε πως η 'hbs' θα είναι η μηχανή template (δηλ. θα ενεργοποιείται με την res.render()) 
app.set('view engine', 'hbs');

let getAllElements = function (callback) {
    callback(null, {});
};

let start = function(req,res){
    getAllElements(function(err,tasks){
        if (err) {
            res.send(err);
        }
        res.render('home_page',{"name":req.session.loggedUserUsername, "role":req.session.loggedUserRole ,"loggedUserId": req.session.loggedUserId});
    });
}

let lines = function(req,res){
    getAllElements(function(err,tasks){
        if (err) {
            res.send(err);
        }
        res.render('lines',{"loggedUserId": req.session.loggedUserId});
    });
}

let info = function(req,res){
    getAllElements(function(err,tasks){
        if (err) {
            res.send(err);
        }
        res.render('info',{"loggedUserId": req.session.loggedUserId});
    });
}

let ticketSellingPoint = function(req,res){
    getAllElements(function(err,tasks){
        if (err) {
            res.send(err);
        }
        let table = new Array();
        userModel.getTicketSellingPointInfo((err,rows)=>{
            if(err){
                res.send(err);
            }
            for(let i of rows){
                i.time = i.time.split("\\r\\n");
                table.push(i);
            }
        })
        res.render('ticket-selling-point',{"data":table, "loggedUserId": req.session.loggedUserId});
    });
}

let tickets = function(req,res){
    getAllElements(function(err,tasks){
        if (err) {
            res.send(err);
        }
        let tickettable = new Array();
        let cardtable = new Array();
        userModel.getTicketInfo((err,rows)=>{
            if(err){
                return console.error(err.message);
            }
            for(let i of rows){
                if(i.type == "ticket"){
                    tickettable.push(i);
                }
                else if(i.type == "card"){
                    cardtable.push(i);
                }
            }
        })
        res.render('tickets',{"data":tickettable, "data2":cardtable, "loggedUserId": req.session.loggedUserId});
    });
}

//update
let updateTickets1 = function(req,res){
    getAllElements(function(err,tasks){
        if(err){
            res.send(err);
        }
        let tickettable = new Array();
        let cardtable = new Array();
        userModel.getTicketInfo((err,rows)=>{
            if(err){
                return console.error(err.message);
            }
            for(let i of rows){
                if(i.type == "ticket"){
                    tickettable.push(i);
                }
                else if(i.type == "card"){
                    cardtable.push(i);
                }
            }
        })
        res.render('tickets-update',{"data":tickettable, "data2":cardtable, "loggedUserId": req.session.loggedUserId})
    })
}

let updateTicketsSellingPoint1 = function(req,res){
    getAllElements(function(err,tasks){
        if (err) {
            res.send(err);
        }
        let table = new Array();
        userModel.getTicketSellingPointInfo((err,rows)=>{
            if(err){
                res.send(err);
            }
            for(let i of rows){
                i.time = i.time.split(",");
                table.push(i);
            }
        })
        res.render('ticket-selling-point-update',{"data":table, "loggedUserId": req.session.loggedUserId});
    });
}

app.use(router);


router.route('').get(start);
router.route('/home').get(start);
router.route('/info').get(info);
router.route('/ticket-selling-points').get(ticketSellingPoint);
router.route('/tickets').get(tickets);

router.route('/getNearestStops/:latitude/:longitude').get((req, res) => {
    userModel.getNearestStop(req.params.latitude, req.params.longitude, (err,rows)=>{
        if (err) {
            return console.error(err.message);
        }
        res.json( { closest_stop: rows[0].stop_name});

    })
})
router.route('/findLines/:start/:destination').get((req, res) => {
    userModel.findLine(req.params.start, req.params.destination, (err,rows)=>{
        if (err) {
            return console.error(err.message);
        }
        res.json( { lines: rows});

    })
})

app.get("/lines", (req, res) => {
    userModel.getLines((err, rows) => {
        if (err) {
            return console.error(err.message);
        }
        let table = new Array();
        for (let i of rows) {
            let l = new Object();
            l.line_number = i.line_number;
            l.line_name = i.line_name;
            let notintable = "true";
            for (let j of table) {
                if (j.line_number == l.line_number) {
                    notintable = "false";
                }
            }
            if (notintable == "true") {
                table.push(l);
            }
        }
        for (let i of table) {
            i.day = new Array();
            let time1 = new Array();
            let time2 = new Array();
            let time3 = new Array();
            let time4 = new Array();
            let time5 = new Array();
            let time6 = new Array();
            let time7 = new Array();
            for (let j of rows) {
                if (j.line_number == i.line_number) {
                    if (j.day == "Δευτέρα") {
                        time1.push(j.hour);
                    }
                    if (j.day == "Τρίτη") {
                        time2.push(j.hour);
                    }
                    if (j.day == "Τετάρτη") {
                        time3.push(j.hour);
                    }
                    if (j.day == "Πέμπτη") {
                        time4.push(j.hour);
                    }
                    if (j.day == "Παρασκευή") {
                        time5.push(j.hour);
                    }
                    if (j.day == "Σάββατο") {
                        time6.push(j.hour);
                    }
                    if (j.day == "Κυριακή") {
                        time7.push(j.hour);
                    }
                }
            }
            i.day.push(time1);
            i.day.push(time2);
            i.day.push(time3);
            i.day.push(time4);
            i.day.push(time5);
            i.day.push(time6);
            i.day.push(time7);
        }
        res.render("lines", { data: table});
    })
})

router.route('/login').get(logInController.checkAuthenticated, logInController.showLogInForm);
router.route('/login').post(logInController.doLogin);

router.route('/register').get(logInController.checkAuthenticated, logInController.showRegisterForm);
router.post('/register', logInController.doRegister);

//update
router.route('/update-tickets').get(logInController.checkAuthenticated, updateTickets1);
//router.route('/update-ticket-selling-points').get(updateTicketSellingPoints);
router.route('/update-tickets-submit/:x/:y').get((req,res)=>{
    userModel.updateTickets(req.params.x,req.params.y,(err,rows)=>{
        if(err){
            return console.error(err.message);
        }
        // res.json({data:rows});
        res.redirect('/tickets')
    })
})

router.route('/update-ticket-selling-points').get( updateTicketsSellingPoint1);
////logInController.checkAuthenticated,

router.route('/update-ticket-selling-points-submit/:x/:y/:z').get((req,res)=>{
    userModel.updateTicketSellingPoints(req.params.x,req.params.y,req.params.z,(err,rows)=>{
        if(err){
            return console.error(err.message);
        }
        //res.json({data:rows});
    })
    res.redirect('/tickets');
})

router.route('/showStopList/').get((req, res) => {
    userModel.stopList((err,rows)=>{
        if (err) {
            return console.error(err.message);
        }
        res.json( { stops: rows});
    })
})

router.route('/getStopsCoords/:line_name').get((req, res) => {
    userModel.getLineStops(req.params.line_name, (err,rows)=>{
        if (err) {
            return console.error(err.message);
        }
        res.json( { lineStops: rows});

    })
})

let port = process.env.PORT || '3000';

const server = app.listen(port, () => { console.log("Περιμένω αιτήματα στο port " + port) });
