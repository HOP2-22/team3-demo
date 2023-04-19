const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema({
  email: { type: "String", required: true },
  password: { type: "String", required: true },
  username: { type: "String", required: true },
  type_of: { type: "String", required: true },
  Role: { type: "String" },
});

const artist = mongoose.model("artist", artistSchema);

module.exports = artist;
