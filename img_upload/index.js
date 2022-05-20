const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const fileUpload = require("express-fileupload");
app.use(express.json());
app.use(fileUpload());

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// defined the view engine as ejs
// app.use("view engine", "ejs");
app.set(express.static("public"));

// app.use("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// defined the view engine as ejs 
app.set('view engine','ejs');

const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(
    "mongodb://localhost/data_base",
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
    required: [true, "please Enter Name"],
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

app.get("/", async (req, res) => 
{
  const data = await model_person.find()
  res.render("home",{data: data});
  console.log(data)
});
app.get("/insert", (req, res) => {
  res.render("insert");
});
app.post("/save", async (req, res) => {
  // res.render("insert");
  // console.log(req.files);
  // console.log(req.body);
  const {name,email }= req.body;
  const file_obj = req.files.img;
  const savedData = await model_person.create({
    name,email,img:file_obj.name
  })
  file_obj.mv(`./public/img/`+file_obj.name, async (e)=>
  {
    if(e)
    {
     
      console.log("image uploaded error");
      
    }
    else
    {
      console.log("image uploaded");
    }
  })

  //   console.log(req.files);
  res.render("home")
});

app.listen(4000, () => {
  console.log("server started");
});
