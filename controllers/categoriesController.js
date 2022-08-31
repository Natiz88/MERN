const categories = require("../models/categoriesModel");

exports.getcategories = async (req, res) => {
  const query = req.query;
  try {
    const allcategories = await categories.find();
    res.status(200).json({
      status: "successfull",
      results: allcategories.length,
      data: {
        categories: allcategories,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
exports.getIndividualcategories = async (req, res) => {
  try {
    const singlecategories = await categories.findById(req.params.id);
    res.status(200).json({
      status: "successfull",
      data: {
        categories: singlecategories,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
exports.postcategories = async (req, res) => {
  try {
    const newcategories = await categories.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        categories: newcategories,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
exports.updatecategories = async (req, res) => {
  try {
    const updatecategories = await categories.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({
      status: "successfull",
      data: {
        categories: updatecategories,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
exports.deletecategories = async (req, res) => {
  console.log(req.params.id);
  try {
    const deletecategories = await categories.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "successfull",
      data: {
        categories: deletecategories,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
