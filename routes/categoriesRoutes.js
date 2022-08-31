const express = require("express");
const categoriesController = require("../controllers/categoriesController");

const categoriesRouter = express.Router();

categoriesRouter
  .route("/")
  .get(categoriesController.getcategories)
  .post(categoriesController.postcategories);

categoriesRouter
  .route("/:id")
  .get(categoriesController.getIndividualcategories)
  .put(categoriesController.updatecategories)
  .delete(categoriesController.deletecategories);

module.exports = categoriesRouter;
