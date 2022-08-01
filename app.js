const express = require("express");
const userRouter = require("./routes/userRoutes");

var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use("/api/v1/users", userRouter);

module.exports = app;
