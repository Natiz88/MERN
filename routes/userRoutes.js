const express = require("express");
const userController = require("../controllers/userController");
const authController = require("./../controllers/authController");

const userRouter = express.Router();
userRouter.route("/signup").post(authController.signup);
userRouter.route("/login").post(authController.login);

userRouter.route("/").get(userController.getUsers);

userRouter
  .route("/:id")
  .get(userController.getIndividualUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
