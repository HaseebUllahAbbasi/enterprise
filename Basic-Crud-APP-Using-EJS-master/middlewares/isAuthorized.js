const UserSchema = require("../models/UserModel");
const isAuthorized = (req, res, next) => {
    UserSchema.findById(req.session.uid, (err, user) => {
        if (!user) {
            return res.redirect("/signin");
        }
        next();
    });
}
module.exports = isAuthorized;