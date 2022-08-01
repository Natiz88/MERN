const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "a user must have a name"],
    unique: true,
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  mobile_number: {
    type: String,
    required: [true, "number is reqired"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "number is reqired"],
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, "number is reqired"],
  },
  password_confirmation: {
    type: String,
    required: [true, "number is reqired"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
