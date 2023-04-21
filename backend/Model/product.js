const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  ownerID: { type: String, required: true },
  productName: { type: String, required: true },
  images: [{ type: String }],
  price: { type: String, required: true },
  //   size: [
  //  "sm":
  //   ],
  sm: {
    count: {
      type: Number,
      default: 0,
    },
  },
  md: {
    count: {
      type: Number,
      default: 0,
    },
  },
  lg: {
    count: {
      type: Number,
      default: 0,
    },
  },

  status: {
    type: String,
    enum: ["pending", "rejected", "accepted"],
    default: "pending",
  },
});
const product = mongoose.model("product", productSchema);

module.exports = product;
