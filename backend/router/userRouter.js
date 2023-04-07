const express = require("express");
const { getUsers, createUser, Login } = require("../controller/usersControl");

const userRouter = express.Router();

userRouter.get("/", getUsers).post("/signup", createUser).post("/login", Login);

module.exports = userRouter;
