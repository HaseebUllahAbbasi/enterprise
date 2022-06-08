const express = require("express");
const router = express.Router();
const {LoginPage, Login, RegisterPage, Register, Logout} = require("../controller/UserController");
const Middleware_IsLoggedIn = require("../middlewares/isLogin");

// router.route("/auth/:method").get(signInPage);
router.get("/signin",Middleware_IsLoggedIn,LoginPage);
router.post("/signin",Login);
router.get("/logout",Logout);

router.get("/signup",Middleware_IsLoggedIn,RegisterPage);
router.post("/signup",Register);

module.exports = router;