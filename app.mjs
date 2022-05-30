//Express.js
import express from 'express'
import { query } from 'express';
//Handlebars (https://www.npmjs.com/package/express-handlebars)
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
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
        res.render('home_page',{});
    });
}

let lines = function(req,res){
    getAllElements(function(err,tasks){
        if (err) {
            res.send(err);
        }
        res.render('lines',{});
    });
}

let info = function(req,res){
    getAllElements(function(err,tasks){
        if (err) {
            res.send(err);
        }
        res.render('info',{});
    });
}

let ticketSellingPoint = function(req,res){
    getAllElements(function(err,tasks){
        if (err) {
            res.send(err);
        }
        res.render('ticket-selling-point',{});
    });
}

let tickets = function(req,res){
    getAllElements(function(err,tasks){
        if (err) {
            res.send(err);
        }
        res.render('tickets',{});
    });
}

app.use(router);

router.route('').get(start);
router.route('/home').get(start);
router.route('/info').get(info);
router.route('/lines').get(lines);
router.route('/ticket-selling-points').get(ticketSellingPoint);
router.route('/tickets').get(tickets);

////

let port = process.env.PORT || '3000';

const server = app.listen(port, () => { console.log("Περιμένω αιτήματα στο port " + port) });
