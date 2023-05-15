const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema(
  {
    email: { type: "String", required: true },
    password: { type: "String", required: true },
    username: { type: "String", required: true },
    type_of: {
      type: "String",
      enum: [
        "Оёдолчин",
        "Гэрэл зурагчин",
        "Зураач",
        "График дизайнер",
        "Гар урлаач",
      ],
    },
    cv: { type: "String", required: true },
    Role: { type: "String" },
    image: { type: "String", required: true },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

artistSchema.virtual("products", {
  ref: "product",
  localField: "_id",
  foreignField: "owner",
  justOne: false,
});

const artist = mongoose.model("artists", artistSchema);

module.exports = artist;
