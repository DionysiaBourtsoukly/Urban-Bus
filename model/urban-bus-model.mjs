'use strict';
import db from 'better-sqlite3'
import bcrypt from 'bcrypt'
import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db_name = path.join(__dirname, "Urban_Bus_Company.db");

const sql = new db('./model/urban-bus.sqlite', { fileMustExist: true });

export let getLines = (callback) => {
    const sql = "SELECT DISTINCT * FROM LINE";
    const sql2 = "SELECT DISTINCT * FROM LINE join SCHEDULED_ROUTE on SCHEDULED_ROUTE.line_number = LINE.line_number";
    const db = new sqlite3.Database(db_name);
    var r;
    var r2;
    db.all(sql2, (err, rows) => {
        if (err) {
            db.close();
            callback(err, null);
        }
        // r = rows;
        
        callback(null, rows); // επιστρέφει array
    });
    // db.all(sql2, (err, rows2) => {
    //     if (err) {
    //         db.close();
    //         callback(err, null);
    //     }
    //     r2 =rows2;
    //     db.close();
    // });
    // callback(null,r, r2); // επιστρέφει array
}
const  query = (text, params, callback) => {
    const db = new sqlite3.Database(db_name);
    return db.query(text, params, callback)
}


export let connect = (callback) => {
    callback(null, true)
}

export let findUserByUsernamePassword = (username, password, callback) => {
    //Φέρε μόνο μια εγγραφή (το LIMIT 0, 1) που να έχει username και password ίσο με username και password 
    const stmt = sql.prepare("SELECT username FROM user WHERE username = ? and password = ? LIMIT 0, 1");
    let user;
    try {
        user = stmt.all(username, password);
    } catch (err) {
        callback(err, null);
    }
    callback(null, user);
}

export let getUserByUsername = (username, callback) => {
    const stmt = sql.prepare("SELECT id, username, password, role FROM user WHERE username = ? LIMIT 0, 1");
    let user;
    try {
        user = stmt.all(username);
    } catch (err) {
        callback(err, null);
    }

    callback(null, user[0])
}

export let getUserById = (id, callback) => {
    const stmt = sql.prepare("SELECT id, username, password, role FROM user WHERE id = ? LIMIT 0, 1");
    let user;
    try {
        user = stmt.all(id);
    } catch (err) {
        callback(err, null);
    }

    callback(null, user[0])
}

export let registerUser = function (username, password, callback) {
    // ελέγχουμε αν υπάρχει χρήστης με αυτό το username
    getUserByUsername(username, async (err, userId) => {
        if (userId != undefined) {
            callback(null, null, { message: "Υπάρχει ήδη χρήστης με αυτό το όνομα" })
        } else {
            try {
                const hashedPassword = await bcrypt.hash(password, 10);
                const role = 0;
                const stmt = sql.prepare('INSERT INTO user VALUES (null, ?, ?, ?)');
                let info;

                try {
                    info = stmt.run(username, hashedPassword, role);
                }
                catch (err) {
                    //Αν υπάρχει σφάλμα, κάλεσε τη συνάρτηση επιστροφής και δώστης το σφάλμα
                    callback(err, null);
                }
                //Αλλιώς κάλεσε τη συνάρτηση επιστροφής με όρισμα το id που πήρε από τη βάση η νέα εγγραφή
                //Την τιμή του info.lastInsertRowid μας τη δίνει η ίδια η βάση και εξασφαλίζουμε έτσι πως κάθε
                //εγγραφή έχει μοναδικό id
                callback(null, info.lastInsertRowid);
            } catch (error) {
                callback(error);
            }
        }

    })
}

export let getTicketInfo = function(callback){
    const stmt = sql.prepare("SELECT type, sale, zone, price FROM ticket_card");
    let table;
    try{
        table = stmt.all();
    }
    catch(err){
        callback(err,null);
    }
    callback(null, table);
}

export let updateTickets = function(x,y ,callback){
    const stmt = sql.prepare('UPDATE ticket_card set price = ? WHERE id = ?');
    let info;
    try {
        const xx = x.toString();
        const yy = parseInt(y) +1;
        info = stmt.run(xx,yy);
    }
    catch (err) {
        //Αν υπάρχει σφάλμα, κάλεσε τη συνάρτηση επιστροφής και δώστης το σφάλμα
        callback(err, null);
        console.log(err);
    }
}

export let getTicketSellingPointInfo = function(callback){
    const stmt = sql.prepare("SELECT * from ticket_selling_point");
    let table;
    try{
        table = stmt.all();
    }
    catch(err){
        callback(err,null);
    }
    callback(null,table);
}

export let updateTicketSellingPoints = function(x,y,z ,callback){
    const stmt = sql.prepare('UPDATE ticket_selling_point set address = ?,time = ? WHERE id = ?');
    let info;
    try {
        const xx = x.toString();
        const yy = y.toString();
        const zz = parseInt(z)+1;
        info = stmt.run(xx,yy,zz);
        console.log("done");
    }
    catch (err) {
        //Αν υπάρχει σφάλμα, κάλεσε τη συνάρτηση επιστροφής και δώστης το σφάλμα
        callback(err, null);
        console.log(err);
    }
}

export let getNearestStop = (gps_lat, gps_lng, callback)=>{
    const sql = "select stop_name from (SELECT * , ((?-gps_latitude)*(?-gps_latitude)+(?-gps_longtitude)*(?-gps_longtitude)) as d_square from stop order by d_square limit 1)"
    const db = new sqlite3.Database(db_name);
    db.all(sql, [gps_lat, gps_lat, gps_lng,gps_lng], (err, rows) => {
    if (err) {
        db.close();
        callback(err, null);
    }
    db.close();
    callback(null, rows); 
});
}


export let findLine = (start, destination, callback)=>{
    const sql = "select Y.line_number, (strftime('%s', hour)-strftime('%s', time('15:10')))/60 +sum(time_difference) as 'waiting_time' from (select * from(select *from SCHEDULED_ROUTE where line_number in(select line_number from HAS_STOP where next_stop in (select stop_id from stop where stop_name=?) INTERSECT select line_number from HAS_STOP where next_stop in (select stop_id from stop where stop_name=?) group by line_number) and day='Κυριακή' and time('15:10')<hour group by line_number order by hour) as X join HAS_STOP on HAS_STOP.line_number=X.line_number) as Y join (select stops_order as b,line_number from HAS_STOP join stop on stop_id=next_stop where stop_name=?) as Z on Y.line_number=Z.line_number where stops_order<=b group by Y.line_number"
    const db = new sqlite3.Database(db_name);
    db.all(sql, [start,destination,start], (err, rows) => {
    if (err) {
        db.close();
        callback(err, null);
    }
    db.close();
    callback(null, rows); 
});
}

export let stopList = (callback)=> {
    const sql = "select stop_name from stop"
    const db = new sqlite3.Database(db_name);
    db.all(sql, (err, rows) => {
    if (err) {
        db.close();
        callback(err, null);
    }
    db.close();
    callback(null, rows); 
});
}

export let getLineStops = (line_name, callback) =>{
    const sql = "select stop_name,gps_latitude,gps_longtitude from HAS_STOP join stop on next_stop=stop_id join LINE on HAS_STOP.line_number=line.line_number where line_name=? order by stops_order"
    const db = new sqlite3.Database(db_name);
    db.all(sql, [line_name], (err, rows) => {
    if (err) {
        db.close();
        callback(err, null);
    }
    db.close();
    callback(null, rows); 
});
}