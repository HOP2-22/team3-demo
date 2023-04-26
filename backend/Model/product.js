const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  ownerID: { type: String, required: true },
  productName: { type: String, required: true },
  images: [{ type: String }],
  color: { type: String, required: true },
  price: { type: String, required: true },
  size: {
    xxs: {
      count: {
        type: Number,
        default: 0,
      },
    },
    xs: {
      count: {
        type: Number,
        default: 0,
      },
    },
    s: {
      count: {
        type: Number,
        default: 0,
      },
    },
    m: {
      count: {
        type: Number,
        default: 0,
      },
    },
    l: {
      count: {
        type: Number,
        default: 0,
      },
    },
    xxl: {
      count: {
        type: Number,
        default: 0,
      },
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
