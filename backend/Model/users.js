const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Task = new Schema({
  email: { type: String, required: [true, "write your email"] },
  password: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  Role: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  userId: { type: mongoose.Schema.ObjectId, required: true },
});

module.exports = mongoose.model("User", Task);
