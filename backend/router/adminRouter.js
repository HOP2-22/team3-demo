const express = require("express");
const { createAdmin, login } = require("../controller/adminControl");
const adminRouter = express.Router();

adminRouter.post("/", createAdmin);
adminRouter.post("/login", login);

module.exports = adminRouter;
