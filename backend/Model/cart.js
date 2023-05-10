const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  cardUser: { type: mongoose.Schema.ObjectId, required: true, ref: "users" },
  productId: {
    // type: [mongoose.Schema.ObjectId],
    type: String,
    required: true,
    ref: "products",
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: Object,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
