const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  type_of: {
    type: "string",
    enum: ["Хувцас", "Гар урлал", "Бусад"],
  },
  productName: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, required: true, ref: "artists" },
  images: { type: String },
  color: { type: String, required: true },
  price: { type: Number },
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
  details: { type: String },
  caretip: { type: String },
  warning: { type: String },
  status: {
    type: String,
    enum: ["pending", "rejected", "approved"],
    default: "pending",
  },
  Date: { type: Date, default: Date.now },
});
const product = mongoose.model("product", productSchema);

module.exports = product;
