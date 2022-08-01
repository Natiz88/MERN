const express = require("express");
const userControllers = require("../controllers/mysqluserControllers");

const userRouter = express.Router();
userRouter
  .route("/")
  .get(userControllers.getUsers)
  .post(userControllers.postUser);

userRouter
  .route("/:id")
  .get(userControllers.getSingleUser)
  .put(userControllers.updateUser)
  .delete(userControllers.deleteUser);

module.exports = userRouter;
