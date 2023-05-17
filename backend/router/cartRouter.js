const express = require("express");

const {
  addProductIntoCart,
  deleteProductFromCart,
  getUserCarts,
} = require("../Controller/CartController");

const cartRouter = express.Router();

cartRouter.post("/addToCart", addProductIntoCart);
cartRouter.post("/:id", getUserCarts);
cartRouter.delete("/deleteFromCart", deleteProductFromCart);

module.exports = cartRouter;
