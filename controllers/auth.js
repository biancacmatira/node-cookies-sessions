exports.getLogin = (req,res,next) => {
    console.log(req.get('Cookie'));
    const isLoggedIn  = req.get('Cookie').split('=')[1] === 'true'
    console.log(isLoggedIn);
    res.render('auth/login', {
        path: '/auth/login',
        pageTitle: 'Login Page',
        isAuth: isLoggedIn
    })
}

exports.postLogin = (req,res,next) => {
    res.setHeader('Set-Cookie', 'loggedIn=true'); 
    res.redirect('/');
}