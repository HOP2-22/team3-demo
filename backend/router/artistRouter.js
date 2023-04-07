const express = require("express");

const { createPost } = require("../controller/artistControl");

const artistRouter = express.Router();

artistRouter.post("/create", createPost);

module.exports = artistRouter;
