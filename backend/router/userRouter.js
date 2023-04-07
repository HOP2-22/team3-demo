const express = require("express");

const {
  createUser,
  getUsers,
  getUserById,
  login,
} = require("../controller/UserController");

const userRouter = express.Router();

userRouter.get("/findUser/:_id", getUserById);
userRouter.post("/create", createUser);
userRouter.get("/", getUsers);
userRouter.post("/login", login);

module.exports = userRouter;
