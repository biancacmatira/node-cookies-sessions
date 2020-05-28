const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    console.log(req.session.isLoggedIn);
    res.render('auth/login', {
        path: '/auth/login',
        pageTitle: 'Login Page',
        isAuth: false
    });
};

//fake login process
exports.postLogin = (req, res, next) => {
    User.findById('5ed011b19e7455d6377df5a1') //change the ID to a user id on your DB (create a users collection)
        .then(user => {
            req.session.isLoggedIn = true;
            req.session.user = user;
            req.session.save((err)=>{
                console.log(err);
                res.redirect('/');
            });
        })
        .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {

    req.session.destroy((err) => {
        console.log(err);
        res.redirect('/');
    })
};