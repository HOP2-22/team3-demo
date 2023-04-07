const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connection = mongoose.connection;
const connect = require("./database");
const userRouter = require("./router/userRouter");
const artistRouter = require("./router/artistRouter");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const URI = process.env.URI;

mongoose.connect(URI);

app.use(express.json());
app.use(cors());

app.use("/user", usersRouter);
app.use("/admin", adminRouter);
app.use("/artist", artistRouter);

connection.once("open", () => {
  console.log("connect MONGODB server");
});
