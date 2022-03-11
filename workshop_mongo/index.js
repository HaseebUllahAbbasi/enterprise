const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

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
//creating the model in order to mantain the data integrity
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please Enter Name"],
  },
  email: {
    type: String,
    required: [true, "please Enter Email"],
  },
});
const model_person = mongoose.model("Person", PersonSchema);

app.get("/", async (req, res) => {
  const list_data = await model_person.find();
  res.status(200).json({
    success: true,
    message: "this is message",
    list_data,
  });
});

app.get("/:name", async (req, res) => {
  const { name } = req.params;
  const list_data = await model_person.find({ name: name });
  res.status(200).json({
    success: true,
    message: "this is message",
    list_data,
  });
});

app.post("/", async (req, res) => {
  const { name, email } = req.body;
  const data_created = await model_person.create({
    name: name,
    email: email,
  });
  res.status(200).json({
    success: true,
    message: "data created ",
    data_created,
  });
});

app.listen(3000, () => {
  console.log("server started on port  3000 ,  ");
});