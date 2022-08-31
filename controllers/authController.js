const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");

const signupToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

exports.signup = async (req, res) => {
  req.requestTime = new Date().toISOString();
  try {
    const newUser = await User.create({
      name: req.body.name,
      address: req.body.address,
      mobile_number: req.body.mobile_number,
      email: req.body.email,
      type: req.body.type,
      password: req.body.password,
      password_confirmation: req.body.password_confirmation,
    });

    const token = signupToken(newUser._id);

    res.status(201).json({
      status: "success",
      token,
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
exports.login = async (req, res) => {
  console.log(req.body);
  req.requestTime = new Date().toISOString();

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({
      status: "failed",
      message: "missing required fields.",
    });
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(401).json({
      status: "failed",
      message: "The credentials do not match.",
    });
  }

  const token = signupToken(user._id);

  res.status(200).json({
    status: "success",
    token,
    request: req.requestTime,
  });
};
