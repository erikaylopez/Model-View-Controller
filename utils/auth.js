const isAuth = (req, res, next) => { // middleware function that checks if the user is logged in
    if (req.session.loggedIn) {
        console.log("still logged in") // if the user is logged in, the function will call next()
        next();
    } else { // if the user is not logged in, the function will redirect to the login page
        res.redirect('/login');
    }
  };
  
  module.exports = isAuth;