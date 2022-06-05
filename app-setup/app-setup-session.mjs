import session from 'express-session'

export let urbanBusSession =
    //Ενεργοποίηση της συνεδρίας. 
    session({
        name: 'urbanBuslist-session',
        //Για την ιδιότητα 'secret':
        //Φτιάξτε ένα αρχείο με όνομα '.env' τον ίδιο φάκελο
        //και γράψτε μέσα SESSION_SECRET = enatyxaiomegaloalfarithmitiko
        //και εδώ γράψτε:
        //secret:    process.env.SESSION_SECRET, // κλειδί για κρυπτογράφηση του cookie
        secret: 'secret',
        resave: false, // https://www.npmjs.com/package/express-session#user-content-resave
        saveUninitialized: false, // https://www.npmjs.com/package/express-session#user-content-saveuninitialized
        cookie: {
            maxAge: 1000 * 60 * 60, // 1 ώρα
            sameSite: true,
            // secure: true //Το cookie θα σταλεί μόνο μέσω https. Σε απλό http δε θα λειτουργήσει
        }
    })

export default urbanBusSession;