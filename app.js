const express = require("express");
const userRouter = require("./routes/userRoutes");
const categoriesRouter = require("./routes/categoriesRoutes");
const first = require("./middlewares/first");
var bodyParser = require("body-parser");

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  next();
});
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories", categoriesRouter);

module.exports = app;
