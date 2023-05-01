const express = require("express");
const { createAdmin, loginAdmin } = require("../controller/adminControl");
const adminRouter = express.Router();

adminRouter.post("/", createAdmin);
adminRouter.post("/login", loginAdmin);

module.exports = adminRouter;
