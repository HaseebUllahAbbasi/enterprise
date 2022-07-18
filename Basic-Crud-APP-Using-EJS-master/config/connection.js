const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_STRING,
        { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.log("error in creating db");
                throw err;
            }
            console.log("Connected to MongoDB!!!");
        }
    )
}
module.exports = connectDatabase;
