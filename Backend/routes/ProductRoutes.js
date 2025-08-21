import express from "express";

const productRoute = express.Router();

import { productParser } from "../config/upload.js";
import {
  addProduct,
  createReview,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  getAllProducts
} from "../controllers/ProductController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";


productRoute
  .route("/")
  .post(productParser.single("image"), addProduct)
  .get(getProducts);

productRoute.route("/getAllProducts").get(protect, admin, getAllProducts)

productRoute
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, productParser.single("image"), updateProduct)

productRoute.route("/:id/review").post(protect, createReview);

export default productRoute;