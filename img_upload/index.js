const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const fileUpload = require("express-fileupload");
// app.use(express.json());
const bodyParser = require("body-parser");

app.use(fileUpload);
app.use(bodyParser.json()).use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// defined the view engine as ejs
// app.use("view engine", "ejs");
// app.set(express.static("public"));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// app.use(express.static(path.join(__dirname, "public")));

const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(
    "mongodb://localhost/img_upload",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log("error in creating db");
        throw err;
      }
      console.log("Connected to MongoDB!!!");
    }
  );
};
connectDatabase();
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "please Enter Name"],
  },
  email: {
    type: String,
    // required: [true, "please Enter gmail"],
  },
  img: {
    type: String,
  },
});
const model_person = mongoose.model("Student", StudentSchema);

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/insert", (req, res) => {
  res.render("insert");
});
app.post("/save", (req, res) => {
  // res.render("insert");
  console.log(req.body);
  //   console.log(req.files);
  res.send("sahi");
});

app.listen(4000, () => {
  console.log("server started");
});
