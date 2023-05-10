const express = require("express");

const {
  addProductIntoCart,
  deleteProductFromCart,
} = require("../Controller/CartController");

const cartRouter = express.Router();

cartRouter.post("/addToCart", addProductIntoCart);
cartRouter.delete("/deleteFromCart", deleteProductFromCart);

module.exports = cartRouter;
