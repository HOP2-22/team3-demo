const express = require("express");

const { getUserById } = require("../Controller/usersControl");

const {
  getArtist,
  getArtistById,
  createArtist,
  login,
  DeleteAll,
  deleteArtist,
} = require("../controller/artistControl");

const artistRouter = express.Router();

artistRouter.get("/", getArtist);
artistRouter.get("/findArtist/:_id", getArtistById);
artistRouter.post("/create", createArtist);
artistRouter.post("/login", login);
artistRouter.delete("/delete", deleteArtist);
artistRouter.delete("/deleteAll", DeleteAll);

module.exports = artistRouter;
