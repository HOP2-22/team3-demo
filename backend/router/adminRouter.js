const express = require("express");
const { getPost } = require("../controller/adminControl");
const adminRouter = express.Router();

adminRouter.get("/posts", getPost);
adminRouter.post("/posts");

module.exports = adminRouter;
