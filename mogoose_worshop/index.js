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
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please Enter Name"],
  },
  email: {
    type: String,
    required: [true, "please Enter gmail"],
  },
});

const model_person = mongoose.model("Person", PersonSchema);

const insertMe = async () => {
  const data = await model_person.create({
    name: "abid",
    email: "ali@gmail.com",
  }); // insert
  console.log(data);
};

const callMe = async () => {
  // print all the data

  var data = await model_person.find();
  console.log(data);

  // prints only names
  //   var data = await model_person.find({}, { name: 1, _id: 0 });
  //   console.log(data);

  // prints only email
  //   var data = await model_person.find({}, { email: 1, _id: 0 });
  //   console.log(data);
};

// callMe();
// insertMe();

const updateMe = async () => {
  //   const data = await model_person.updateMany(
  //     { name: "abid" },
  //     { name: "irfan" }
  //   );
  //   const data = await model_person.updateMany(
  //     { name: "irfan" },
  //     { $set: { name: "haseeb" } }
  //   );
  //   console.log(data);
};

// updateMe();
// callMe();

const info = async () => {
  const data = await model_person.find().count();
  console.log(data);
};

const deleteMe = async () => {
  // delete one by any attr
  //     const data = await model_person.deleteOne({ name: "abidOne" });
  //   console.log(data);

  //

  const data = await model_person.findByIdAndDelete("627e2be6577832c89c8892c8");
  console.log(data);
};

// info();
deleteMe();
