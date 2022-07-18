const UserSchema = require("../models/UserModel");
const isLoggedIn = (req, res, next) => {
    UserSchema.findById(req.session.uid, (err, user) => {
        if (user) {
            return res.redirect("/");
        }
        next();
    });
};
module.exports = isLoggedIn;