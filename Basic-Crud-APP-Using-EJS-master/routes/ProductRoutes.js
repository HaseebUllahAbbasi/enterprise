const express = require("express")
const router = express.Router();
const {getAllProducts, addNewProduct, findProductById, loadInsert, signInPage, loadProductsTable, updateProductById, deletById, home} = require("../controller/ProductController");
const Middleware_IsAuthorized = require("../middlewares/isAuthorized");
// auth/:method
router.route("/").get(home);
router.route("/delete/:id").get(deletById);
router.route("/products").get(Middleware_IsAuthorized, getAllProducts);
router.route("/user/:id").get(findProductById);
router.route("/insert").get(Middleware_IsAuthorized,loadInsert);

router.route("/table").post(loadProductsTable);


router.route("/update").post(updateProductById); 
router.route("/new").post(addNewProduct); 



module.exports =  router;