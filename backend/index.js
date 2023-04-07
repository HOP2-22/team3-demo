const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connect = require("./database");
const userRouter = require("./router/userRouter");

const app = express();
const port = process.env.PORT || 6666;

app.use(express.json());
app.use(cors());
connect();

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
