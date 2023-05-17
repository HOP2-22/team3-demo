const express = require("express");

const {
  getProducts,
  getProduct,

  createProduct,

  updateProduct,
  deleteProduct,

  DeleteAll,
} = require("../controller/product");

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);

router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

router.delete("/deleteAll", DeleteAll);

module.exports = router;
