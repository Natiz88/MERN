const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  const query = req.query;
  console.log(query);
  try {
    const allUsers = await User.find(query);
    res.status(200).json({
      status: "successfull",
      results: allUsers.length,
      data: {
        users: allUsers,
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
    const singleUser = await User.findById(req.params.id);
    res.status(200).json({
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
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
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
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
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
