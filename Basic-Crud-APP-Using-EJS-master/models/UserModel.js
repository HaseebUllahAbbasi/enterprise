const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email:{
        type: String,
        required:[true, "Please Enter Email"]
    },
    password:{
        type: String,
        required:[true, "Please Enter Password"]
    }
})
UserSchema.pre("save", function(next){
    const user = this;
    bcrypt.hash(user.password,5, function(req,hash){
        user.password = hash;
        next();
    })
});

module.exports = mongoose.model("users",UserSchema)