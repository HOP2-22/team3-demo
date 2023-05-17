const Cart = require("../model/cart.js");
const asyncHandler = require("../middleware/asyncHandler.js");

exports.addProduct = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ owner: req.params.id });

  if (!cart) throw new Error("Cart not found");

  cart.products = [...cart.products, req.body.product];

  cart.save();

  res.status(200).json({ sucess: true, data: cart });
});

exports.removeProduct = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ owner: req.params.id });

  if (!cart) throw new Error("Cart not found");

  if (cart.products.length === 0) throw new Error("cart is empty");

  cart.products = cart.products.filter((item) => req.body.product !== item);

  cart.save();

  res.status(200).json({ sucess: true, data: cart });
});
