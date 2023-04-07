const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema({
  email: { type: "String", required: true },
  password: { type: "String", required: true },
  username: { type: "String", required: true },
  name: { type: "String", required: true },
  title: { type: "String", required: true },
  price: { type: "String", required: true },
  color: { type: "String", required: true },
  size: { type: "String", required: true },
  count: { type: "String", required: true },
});

const artist = mongoose.model("artist", artistSchema);

module.exports = artist;
