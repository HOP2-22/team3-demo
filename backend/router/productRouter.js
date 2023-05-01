const express = require("express");

const {
  createProduct,
  getAllProducts,
  PatchProduct,
  DeleteProduct,
  DeleteAll,
} = require("../Controller/productController");

const productRouter = express.Router();

productRouter.post("/create", createProduct);
productRouter.get("/", getAllProducts);
productRouter.patch("/patch/:id", PatchProduct);
productRouter.delete("/delete", DeleteProduct);
productRouter.delete("/deleteAll", DeleteAll);

module.exports = productRouter;
