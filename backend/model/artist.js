const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema({
  email: { type: "String", required: true },
  password: { type: "String", required: true },
  username: { type: "String", required: true },
  status: { type: "String", required: true },
  name: { type: "String" },
  title: { type: "String" },
  price: { type: Number },
  color: { type: "String" },
  size: { type: "String" },
  count: { type: "String" },
  Role: { type: "String" },
});

const artist = mongoose.model("artist", artistSchema);

module.exports = artist;
