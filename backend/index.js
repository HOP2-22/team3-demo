const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connection = mongoose.connection;
const connect = require("./database");
const userRouter = require("./router/userRouter");
const artistRouter = require("./router/artistRouter");
const adminRouter = require("./router/adminRouter");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/artist", artistRouter);
app.use("/admin", adminRouter);

connection.once("open", () => {
  console.log("connect MONGODB server");
});
