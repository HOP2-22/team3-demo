const express = require("express");
const { createAdmin } = require("../controller/adminControl");
const adminRouter = express.Router();

adminRouter.post("/", createAdmin);

module.exports = adminRouter;
