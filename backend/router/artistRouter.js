const express = require("express");

const {
  createPost,
  deletePost,
  getPosts,
} = require("../controller/artistControl");

const artistRouter = express.Router();

artistRouter.post("/create", createPost);
artistRouter.delete("/delete", deletePost);
artistRouter.get("/posts", getPosts);

module.exports = artistRouter;
