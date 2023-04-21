const express = require("express");

const {
  createProduct,
  getAllProducts,
  PatchProduct,
} = require("../Controller/productController");

const productRouter = express.Router();

productRouter.post("/create", createProduct);
productRouter.get("/", getAllProducts);
productRouter.patch("/update/:id", PatchProduct);

module.exports = productRouter;
