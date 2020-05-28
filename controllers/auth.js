exports.getLogin = (req,res,next) => {
    // console.log(req.get('Cookie'));
    // const isLoggedIn  = req.get('Cookie').split('=')[1] === 'true'
    // console.log(isLoggedIn);
    console.log(req.session.isLoggedIn);
    res.render('auth/login', {
        path: '/auth/login',
        pageTitle: 'Login Page',
        isAuth: false
    })
}

exports.postLogin = (req,res,next) => {
    // res.setHeader('Set-Cookie', 'loggedIn=true'); 
    req.session.isLoggedIn = true;
    res.redirect('/');
}

exports.postLogout = (req,res,next) => {

    req.session.destroy((err)=> {
        console.log(err);
        res.redirect('/');
    })

}