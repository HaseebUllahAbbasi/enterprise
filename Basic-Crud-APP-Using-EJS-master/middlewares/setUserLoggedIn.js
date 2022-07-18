const setUserLoggedIn = (req, res, next) => {
    global.isLoggedIn = req.session.uid;
    next();
};

module.exports = setUserLoggedIn