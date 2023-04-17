const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  ownerID: { type: String, required: true },
  productName: { type: String, required: true },
  images: [{ type: String }],
  price: { type: String, required: true },
  productDetails: {
    size: [{ type: String, required: true }],
    conut: { type: String, required: true },
    color: { type: String, required: true },
  },
  status: {
    type: String,
    enum: ["pending", "rejected", "accepted"],
    default: "pending",
  },
});
const product = mongoose.model("product", productSchema);

module.exports = product;
