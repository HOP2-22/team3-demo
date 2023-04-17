const express = require("express");

const {
  createProduct,
  getAllProducts,
} = require("../Controller/productController");

const productRouter = express.Router();

productRouter.post("/create", createProduct);
productRouter.get("/", getAllProducts);

module.exports = productRouter;
