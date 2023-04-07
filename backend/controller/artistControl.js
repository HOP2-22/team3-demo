const artist = require("../model/artist");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getPosts = async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await artist.findById({ _id });
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.getPostById = async (req, res) => {
  const postId = req.params.postId;
  if (!postId || postId.length != 24) {
    res.status(404).json({ message: "noPostFound" });
    return;
  }
  const response = await artist.findById(postId).populate({
    path: "owner",
    select: "-password",
  });
  if (!response || response?.length === 0) {
    res.status(404).json({ message: "no Post Found" });
    return;
  }
  return res.status(200).json({ post: response });
};

exports.getAllPosts = async (req, res) => {
  try {
    const { limit, page } = Number(req.params);
    const posts = await artist
      .find()
      .limit(limit)
      .skip(limit * (page - 1))
      .populate({
        path: "owner",
        select: "-password",
      })
      .exec();
    res.status(200).send(posts);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

exports.createPost = async (req, res) => {
  if (!req.body.title || !req.body.name)
    return res.status(404).json({ message: "No text provided" });
  try {
    const { name, title, price, colors, size, count } = req.body;
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
