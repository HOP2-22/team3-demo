const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connection;

const app = express();
const PORT = process.env.PORT;
const URI = process.env.URI;

const usersRouter = require("./Router/UserRouter.js");
const adminRouter = require("./Router/AdminRouter");
const artistRouter = require("./Router/Artist");

mongoose.connect(URI);

app.use(express.json());
app.use(cors());

app.use("/user", usersRouter);
// app.use("/admin", adminRouter);
// app.use("/artist", artistRouter);

connection.once("open", () => {
  console.log("connect MONGODB server");
});

app.listen(PORT, () => {
  console.log(PORT, "listening on port");
});
