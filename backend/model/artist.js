const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema({
  email: { type: "String", required: true },
  password: { type: "String", required: true },
  username: { type: "String", required: true },
  type_of: { type: "String", required: true },
  cv: { type: "String", required: true },
  Role: { type: "String" },
  image: { type: "String", required: true },
});

const artist = mongoose.model("artists", artistSchema);

module.exports = artist;
