const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const ProductSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String,
    },
    image: {
        type: String
    }
    
})



module.exports = mongoose.model("products",ProductSchema);