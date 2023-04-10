const express = require("express");

const {
  createArtist,
  getAll,
  login,
} = require("../controller/ArtistController");

const ArtistRouter = express.Router();

ArtistRouter.post("/createArtist", createArtist);
ArtistRouter.get("/getAll", getAll);
ArtistRouter.post("/login", login);

module.exports = ArtistRouter;
