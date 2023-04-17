const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  ownerID: { type: String, required: true },
  productName: { type: String, required: true },
  images: [{ type: String }],
  price: { type: String, required: true },
  count: { type: String, required: true },
  size: [],
  status: {
    type: String,
    enum: ["pending", "rejected", "accepted"],
    default: "pending",
  },
});
const product = mongoose.model("admin", productSchema);

module.exports = product;
