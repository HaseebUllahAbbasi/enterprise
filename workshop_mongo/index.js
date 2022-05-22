const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

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

app.get("/test", (req, res) => {
  res.status(200).json({
    message: "test is successfull",
  });
});
app.get("/", async (req, res) => {
  const list_data = await model_person.find();

  res.status(200).json({
    success: true,
    message: "this is message",
    list_data,
  });
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await model_person.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    message: "Deleted",
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
app.put("/", async (req, res) => {
  const { id, name, email } = req.body;
  const dataUpdate = await model_person.updateOne(
    { _id: id },
    {
      name: name,
      email: email,
    }
  );

  if (dataUpdate.updatedCount)
    res.status(200).json({
      success: true,
      message: "updated",
    });
  else
    res.status(200).json({
      success: true,
      message: "not updated updated",
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

app.listen(3001 || 3002, () => {
  console.log("server started    ,  ");
});
