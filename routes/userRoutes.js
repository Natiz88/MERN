const express = require("express");
const userControllers = require("./controllers/userControllers");

const userRouter = express.Router();
userRouter
  .route("/")
  .get(userControllers.getUsers)
  .post(userControllers.postUsers);

userRouter
  .route("/:id")
  .get(userControllers.getSingleUsers)
  .put(userControllers.updateUser)
  .delete(userControllers.deleteUser);

module.exports = userRouter;
