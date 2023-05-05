const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const usersRouter = require("./router/userRouter");
const adminRouter = require("./router/adminRouter");
const artistRouter = require("./router/artistRouter");
const productRouter = require("./router/productRouter");
const basketRouter = require("./router/basketRouter");

const connection = mongoose.connection;
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const URI = process.env.URI;

mongoose.connect(URI);

app.use(express.json());

app.use(cors());

app.use("/user", usersRouter);
app.use("/artist", artistRouter);
app.use("/admin", adminRouter);
app.use("/product", productRouter);
app.use("/basket", basketRouter);

connection.once("open", () => {
  console.log("connect MONGODB server");
});

app.listen(PORT, () => {
  console.log(PORT, "listening on port");
});
