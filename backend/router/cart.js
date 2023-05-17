const express = require("express");

const { addProduct, removeProduct } = require("../controller/cart");

const router = express.Router();

router.route("/:id").post(addProduct).delete(removeProduct);

module.exports = router;
