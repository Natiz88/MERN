const express = require("express");
const userRouter = require("./routes/userRoutes");
const first = require("./middlewares/first");
var bodyParser = require("body-parser");

const app = express();
app.use(first);
app.use(express.json());
app.use("/api/v1/users", userRouter);

module.exports = app;
