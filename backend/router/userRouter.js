const express = require("express");
const { authenticateToken } = require("../middleware/veryfing");
const Roles = require("../config/roles");

const {
  createUser,
  getUsers,
  getUserById,
  login,
  DeleteAll,
  deleteUser,
} = require("../Controller/usersControl");

const userRouter = express.Router();

userRouter.get("/findUser/:_id", getUserById);
userRouter.post("/create", createUser);
userRouter.get("/", getUsers);
userRouter.post("/login", login);
userRouter.delete("/deleteAll", DeleteAll);
userRouter.delete("/deleteUser", deleteUser);
module.exports = userRouter;
