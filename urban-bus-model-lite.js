import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db_name = path.join(__dirname, "../data", "Urban_Bus_Company.db");

const getLines = (callback) => {
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

// const getMondaySchedule = (line_number, callback)=>{
//     const sql = "SELECT hour FROM SCHEDULED_ROUTE where line_number=? and day=Δευτέρα"
//     const db = new sqlite3.Database(db_name);
//     db.all(sql, [line_number], (err, rows) => {
//     if (err) {
//         db.close();
//         callback(err, null);
//     }
//     db.close();
//     callback(null, rows); // επιστρέφει array
// });
// }

const  query = (text, params, callback) => {
    const db = new sqlite3.Database(db_name);
    return db.query(text, params, callback)
}

export {getLines}
