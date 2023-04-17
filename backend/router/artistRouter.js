const express = require("express");

const {

  createArtist,
  getArtist,
  getArtistById,
  login,

  createPost,
  deletePost,
  getPosts,
  createArtist,

} = require("../controller/artistControl");
const { getUserById } = require("../Controller/usersControl");

const artistRouter = express.Router();


artistRouter.get("/", getArtist);
artistRouter.get("/findArtist/:_id", getArtistById);
artistRouter.post("/create", createArtist);
artistRouter.post("/login", login);

artistRouter.post("/", createArtist);
artistRouter.delete("/delete", deletePost);
artistRouter.get("/posts", getPosts);


module.exports = artistRouter;
