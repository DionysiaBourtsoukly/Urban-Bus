import bcrypt from 'bcrypt'

let userModel;
userModel= await import('../model/urban-bus-model.mjs');

export let showLogInForm = function (req, res) {
    res.render('login-password', {});
}

export let showRegisterForm = function (req, res) {
    res.render('register-password', {});
}

export let doLogin = function(req,res){
    userModel.getUserByUsername(req.body.username, (err, user) => {
        if (user == undefined) {
            res.render('login-password', {});
        }
        else {
            const match = bcrypt.compare(req.body.password, user.password, (err, match) => {
                if (match) {
                    //Θέτουμε τη μεταβλητή συνεδρίας "loggedUserId"
                    req.session.loggedUserId = user.id;
                    req.session.loggedUserUsername = user.username;
                    req.session.loggedUserRole = user.role;
                    //Αν έχει τιμή η μεταβλητή req.session.originalUrl, αλλιώς όρισέ τη σε "/" 
                    const redirectTo = req.session.originalUrl || "/home";
                    // res.redirect("/");
                    res.redirect(redirectTo);
                    // console.log("logged in");
                    //res.render('home_page', {"name":req.session.loggedUserUsername, "role":req.session.loggedUserRole ,"loggedUserId":req.session.loggedUserId});

                }
                else {
                    res.redirect('/login');
                }
            })
        }
    })
}

export let doRegister = function (req, res) {
    userModel.registerUser(req.body.username, req.body.password, (err, result, message) => {
        if (err) {
            console.error('registration error: ' + err);
            //FIXME: δε θα έπρεπε να περνάμε το εσωτερικό σφάλμα στον χρήστη
            res.render('register-password', {});
        }
        else if (message) {
            res.render('register-password',{})
        }
        else {
            res.redirect('/login');
        }
    })
}

export let doLogout = (req, res) => {
    //Σημειώνουμε πως ο χρήστης δεν είναι πια συνδεδεμένος
    req.session.destroy();
    res.redirect('/');
}

export let checkAuthenticated = function (req, res, next) {
    //Αν η μεταβλητή συνεδρίας έχει τεθεί, τότε ο χρήστης είναι συνεδεμένος
    if (req.session.loggedUserId) {
        console.log("user is authenticated", req.originalUrl);
        //Καλεί τον επόμενο χειριστή (handler) του αιτήματος
        next();
    }
    else {
        //Ο χρήστης δεν έχει ταυτοποιηθεί, αν απλά ζητάει το /login ή το register δίνουμε τον
        //έλεγχο στο επόμενο middleware που έχει οριστεί στον router
        if ((req.originalUrl === "/login") || (req.originalUrl === "/register")) {
            next()
        }
        else {
            //Στείλε το χρήστη στη "/login" 
            console.log("not authenticated, redirecting to /login")
            res.redirect('/login');
        }
    }
}