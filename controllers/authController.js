const User = require("./../models/userModel");

exports.signup = async (req, res) => {
  console.log(req.body);
  const date = new Date();
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};
