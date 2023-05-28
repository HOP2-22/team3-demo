const express = require("express");

const {
  getProducts,
  getProduct,

  createProduct,

  updateProduct,
  deleteProduct,

  DeleteAll,
  deleteManyProductByName,
  deleteManyProductByNameAndColor,
  deleteManyProductByNameAndSize,
  buyProduct,
  ChangeProductStatus,
} = require("../controller/product");

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);

router.post("/buy", buyProduct);

router.delete("/deleteByName", deleteManyProductByName);
router.delete("/deleteByNameAndColor", deleteManyProductByNameAndColor);
router.delete("/deleteByNameAndSize", deleteManyProductByNameAndSize);

router.delete("/deleteAll", DeleteAll);
router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);
router
  .route("/:id")
  .get(getProduct)
  .patch((req, res) => {
    res.end();
  })
  .delete(deleteProduct);
router.get(getProduct);
router.patch("/:id", (req, res) => {
  res.end();
});
router.delete(deleteProduct);
router.patch("/status/:id", ChangeProductStatus);

module.exports = router;
