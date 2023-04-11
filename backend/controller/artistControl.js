const artist = require("../model/artist");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getPosts = async (req, res) => {
  try {
    const response = await artist.find();
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
exports.createPost = async (req, res) => {
  if (!req.body.title || !req.body.name)
    return res.status(404).json({ message: "text bolon neree bicnu bayrllao" });
  try {
    const { name, title, price, colors, size, count, status } = req.body;
    const post = await artist.create(req.body);
    res.status(200).send(post);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.deletePost = async (req, res) => {
  const _id = req.params.id;
  try {
    const post = await artist.findByIdAndDelete({ _id });
    res.status(200).send(post);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.updatePost = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const post = await artist.findByIdAndUpdate({ _id }, { ...body });
    res.status(200).send(post);
  } catch (error) {
    res.status(404).send(error);
  }
};
