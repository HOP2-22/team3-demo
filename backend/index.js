const express = require("express");
const mongoose = require("mongoose");
const connection = mongoose.connection;
const userRouter = require("./router/userRouter");
const artistRouter = require("./router/artistRouter");
const adminRouter = require("./router/adminRouter");
const cors = require("cors");

require("dotenv").config();

const app = express();
const uri = process.env.MONGODB_URL;
const PORT = process.env.PORT;
mongoose.connect(uri);

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/artist", artistRouter);
app.use("/admin", adminRouter);

connection.once("open", () => {
  console.log("connect MONGODB server", PORT);
});

app.listen(PORT, () => {
  console.log(PORT, "listening on port");
});
