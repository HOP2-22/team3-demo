const express = require("express");

const {
  createPost,
  deletePost,
  getPosts,
  createArtist,
} = require("../controller/artistControl");

const artistRouter = express.Router();

artistRouter.post("/", createArtist);
artistRouter.delete("/delete", deletePost);
artistRouter.get("/posts", getPosts);

module.exports = artistRouter;
