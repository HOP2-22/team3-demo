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
userRouter.get("/", getUsers);
userRouter.post("/signup", createUser);
userRouter.post("/login", Login);

module.exports = userRouter;
