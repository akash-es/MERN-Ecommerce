import express from"express";
import {producParser} from "../config/uplod.js";
import{addProduct} from "../controllers/ProductController.js";


 const productRoute= express.Router();


 productRoute.route("/").post(productparser.single("image"),addProduct);



 export default productRoute;


 