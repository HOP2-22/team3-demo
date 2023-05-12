const express = require("express");

const {
  createProduct,
  getAllProducts,
  PatchProduct,
  DeleteProduct,
  DeleteAll,
  ChangeProductStatus,
  onlyApproved,
  getProductById,
  getProductByOwner,
} = require("../Controller/productController");

const productRouter = express.Router();

productRouter.post("/create", createProduct);
productRouter.get("/", getAllProducts);
productRouter.patch("/patch/:id", PatchProduct);
productRouter.delete("/delete", DeleteProduct);
productRouter.delete("/deleteAll", DeleteAll);
productRouter.patch("/StatusUpdate/:id", ChangeProductStatus);
productRouter.get("/approved", onlyApproved);
productRouter.get("/getProductById/:id", getProductById);

productRouter.get("/getProductByOwner/:id", getProductByOwner);

module.exports = productRouter;
