const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// "bcrypt": "^5.1.0",
// "colors": "^1.4.0",
// "cors": "^2.8.5",
// "dotenv": "^16.0.3",
// "express": "^4.18.2",
// "jsonwebtoken": "^9.0.0",
// "mongoose": "^7.2.1",
// "nodemon": "^2.0.22"

const productSchema = new Schema({
  size: {
    type: String,
    required: true,
    enum: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
  },
  color: {
    type: String,
    enum: ["Хар", "Улаан", "Шар", "Цэнхэр", "Ногоон", "Цагаан", "Ягаан"],
  },
  count: {
    type: Number,
    required: [true, "too shirhegee ogno vv"],
  },

  name: {
    type: String,
    required: true,
  },
  descriptions: {
    type: String,
  },
  images: { type: String },
  price: {
    type: Number,
    required: [true, "vnee ogno vv"],
  },
  caretip: { type: String, required: true },
  warning: { type: String, required: true },
  type_of: {
    type: "string",
    enum: ["Хувцас", "Гар урлал", "Бусад"],
  },

  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "artists",
  },
  status: {
    type: String,
    enum: ["pending", "rejected", "approved"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Product = mongoose.model("products", productSchema);

module.exports = Product;
