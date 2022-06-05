import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db_name = path.join(__dirname, "../data", "Urban_Bus_Company.db");

const getLines = (callback) => {
    const sql = "SELECT DISTINCT * FROM LINE join SCHEDULED_ROUTE on SCHEDULED_ROUTE.line_number = LINE.line_number";
    const db = new sqlite3.Database(db_name);
    db.all(sql, (err, rows) => {
    if (err) {
        db.close();
        callback(err, null);
    }
    db.close();
    callback(null, rows); // επιστρέφει array
});
}

const getNearestStop = (gps_lat, gps_lng, callback)=>{
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


const findLine = (start, destination, callback)=>{
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

const stopList = (callback)=> {
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

const getLineStops = (line_name, callback) =>{
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

const query = (text, params, callback) => {
    const db = new sqlite3.Database(db_name);
    return db.query(text, params, callback)
}

export { getLines, getNearestStop, findLine, stopList, getLineStops }
