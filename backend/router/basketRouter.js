const express = require("express");
const { getAllBasket } = require("../Controller/basketControl");

const basketRouter = express.Router();

basketRouter.post("/", getAllBasket);

module.exports = basketRouter;
