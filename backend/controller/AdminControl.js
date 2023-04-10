const artist = require("../model/artist");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getPost = async (req, res) => {
  try {
    const data = await artist.find();
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updatePost = async (req, res) => {
  const _id = req.params.id;
  const body = req.body.status;
  try {
    const post = await artist.findByIdAndUpdate({ _id }, { ...body });
    res.status(200).send(post);
  } catch (error) {
    res.status(404).send(error);
  }
};
