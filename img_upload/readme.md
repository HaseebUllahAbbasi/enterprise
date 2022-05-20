# tasks
    npm init -y 

package.json with  diractory name are created

    npm i express      
## Basic
    const express = require("express");
    const app = express();
    app.get("/data",(req,res)=>
    {
        res.send("data");
        res.status(200).json({
            success: true,
            msg: "He is with computer"
        })
    })
    app.listen(4000,()=>{
        console.log("server started")
    })
## EJS
used as template engine for rendering.
files ends with .ejs

    npm i ejs


### code

    const express = require("express");
    const express = require("ejs");
    const app = express();

    
    app.use(express.static("public"));
    // to access the public folder



    app.set('view engine','ejs');
    
        
    /**
    *  
    the styling will be the public url for the web page .
    *  
    * app.use('/styling', express.static('public/style'))
    *
    

    static will be the public url source for the webpage
    
    *
    * app.use('/static', express.static('public'))
    *   
    
    another usage 
    *
    * app.use('/static', express.static(path.join(__dirname, 'public')))  
    * 
  





    app.listen(4000,()=>{
        console.log("server started")
    })


### front end ejs home.ejs

    <%=name %>

      <ul>
        <% for(let i=0; i<products.length; i++) { %>

          <li>
            Product <%=products[i] %>
          </li>

          <% } %>

      </ul>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem suscipit
      quasi qui dolores obcaecati optio eum quia accusantium voluptates tenetur!
      Dolorum minus obcaecati dolore, fugit laudantium maiores alias
      consequuntur quo.
      <img src="/images/chess.jpeg" width="50%" alt="image not found" />


## Mongoose 

library used for interaction with mongodb database 
provides all functionalities like mongo cli 

    npm i mongoose

### code 

    const express = require("express");
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
    // calling connecetion
    connectDatabase();
    //creating schema

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

    const app = express();
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

    app.listen(4000,()=>{
        console.log("server started")
    })

## fileupload 
    npm i express-fileupload   

### code 
    const fileUpload = require("express-fileupload");
    app.use(fileUpload());
    const file_obj = req.files.img;

    //in method 

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