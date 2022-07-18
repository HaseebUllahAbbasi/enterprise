// If you dont understand the below two lines of code just ignore it 
// it onstall a dotenv package to use our defined constants in file config.env
const dotenv = require("dotenv")
dotenv.config({ path: "./config/config.env" })

// Focus on code form here
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const session = require("express-session");

app.use(session({

    secret: "Shh, its a secret!",
    resave: false,
    saveUninitialized: false,

}));

global.isCurrentlySignIn = null;

// this route is set just to test the session is working or not
app.get('/test', function (req, res) {

    if (req.session.page_views) {
        req.session.page_views++;
        res.send("You visited this page " + req.session.page_views + " times with session ID:" + req.sessionID);
    } else {
        req.session.page_views = 1;
        res.send("Welcome to this page for the first time!");
    }
});

app.use(express.static(path.join(__dirname, "public")))

app.use(express.json());
app.use(fileUpload());


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(express.static("public"));
app.set('view engine', 'ejs');

// importing the database conneciton cuntion and excuting it 
const connectDatabse = require("./config/connection")
connectDatabse();

const ProductRoutes = require("./routes/ProductRoutes")
const UserRoutes = require("./routes/UserRoutes");
const setUserLoggedIn = require("./middlewares/setUserLoggedIn");
// app.use("*",setUserLoggedIn)

app.use(ProductRoutes)
app.use(UserRoutes)





// if you don't understand the below app.listen because of CONNSTANT are used 
// Then just comment it and then use the second app.listen with static defined port 6000
// app.listen(process.env.PORT, () => {
//     console.log(`Server is port ${process.env.PORT} in ${process.env.NODE_ENV}`)
// })

// Runnig server with static port 6000 (you can change it if 6000 is not working)
app.listen(9000, () => {
    console.log(`Server connected to port 6000...`)
})
