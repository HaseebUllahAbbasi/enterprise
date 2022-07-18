const ProductSchema = require("../models/ProductModel")


exports.home = async (req, res) => {
    // const data = await ProductSchema.find();
    res.render("home")
    // console.log(data)
    // res.sendFile(__dirname + '/views/form.html')
}
exports.getAllProducts = async (req, res) => {
    const data = await ProductSchema.find();
    res.render("products", { data: data })
    // console.log(data)
    // res.sendFile(__dirname + '/views/form.html')
}



// Delete the user
exports.deletById = async (req, res) => {
    const { id } = req.params;

    const result = await ProductSchema.findByIdAndDelete(id);
    res.redirect("/users")
    // res.sendFile(__dirname + '/views/home.ejs')
}

// find the user by id and render that data to update.ejs file
// this will casue when user click on update botton
exports.findProductById = async (req, res) => {
    const { id } = req.params;
    const result = await ProductSchema.findById(id);
    // console.log(result)

    res.render("update", { result })
    // res.sendFile(__dirname + '/views/home.ejs')
}

exports.updateProductById = async (req, res) => {
    const { id, name, description } = req.body;
    // Checks if the Product has update the image
    if (req.files) {
        const img = req.files.img;
        //the trim() is used to remove extra spaces from both ends fo string, so we can easily search data next time
        await ProductSchema.updateOne({ _id: id }, { $set: { name: name.trim(), description: description.trim(), image: img.name } });

        //move image to public/img directory 
        img.mv("./public/img/" + img.name, async (e) => {
            if (e)
                console.log("Image not updated")
            else
                console.log("Image updated")
        })
    }
    else //if the image is not upadated then only update opther data only
        await ProductSchema.updateOne({ _id: id }, { $set: { name: name, description: description } });

    //redirect the home page
    res.redirect("/")
    // res.sendFile(__dirname + '/views/home.ejs')
}

// load the insert data page
exports.loadInsert = (req, res) => {
    res.render("insert");
    // res.sendFile(__dirname + '/views/insert.ejs')
}

// it add new Product when you fill the insert form
exports.addNewProduct = async (req, res) => {
    // console.log("Img Name: ", req.files.img)
    const { name, description } = req.body;
    const file = req.files.img;

    const result = await ProductSchema.create({ name: name.trim(), description: description.trim(), image: file.name });

    file.mv(`./public/img/` + file.name, async (e) => {
        if (e)
            console.log("error in image uploding")
        else
            console.log("Image uploaded")
    })
    res.redirect("/");
}

exports.loadProductsTable = async (req, res) => {
    const { name } = req.body;
    console.log(name)
    const data = await ProductSchema.find({ name: name.trim() })

    res.render("productstable", { data })
} 