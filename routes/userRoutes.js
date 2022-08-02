const express = require("express");
const userController = require("./../controllers/userControllers");

const userRouter = express.Router();
userRouter
  .route("/")
  .get(userController.getUsers)
  .post(userController.postUser);

userRouter
  .route("/:id")
  .get(userController.getIndividualUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
