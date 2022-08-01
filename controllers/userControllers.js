const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  try {
    const users = User.find();
    res.status(400).json({
      status: "successfull",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
exports.getIndividualUser = async (req, res) => {
  try {
    const singleUser = User.findById(req.params.id);
    res.status(400).json({
      status: "successfull",
      data: {
        user: singleUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
exports.postUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const user = User.findByIdAndUpdate(req.params.id, req.body);
    res.status(400).json({
      status: "successfull",
      results: user,
      data: {
        user: user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const user = User.findByIdAndDelete(req.params.id);
    res.status(400).json({
      status: "successfull",
      data: {
        user: user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
