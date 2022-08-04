const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  photo: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "name field is required."],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "address field is required"],
  },
  mobile_number: {
    type: String,
    required: [true, "mobile_number field is reqired"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email field is reqired"],
    unique: true,
    lowercase: true,
    validator: [validator.isEmail, "invalid email"],
  },
  type: {
    type: String,
    required: [true, "type field is required."],
    enum: {
      values: ["individual", "corporate", "admin"],
      message: "Invalid type used",
    },
  },
  password: {
    type: String,
    required: [true, "password field is reqired"],
    minLength: [8, "Password must be of atleast 8 characters"],
    maxLength: [16, "Password must not be more than 16 characters"],
    select: false,
  },
  password_confirmation: {
    type: String,
    required: [true, "password_confirmation field is reqired"],
    minLength: [8, "Password must be of atleast 8 characters"],
    maxLength: [16, "Password must not be more than 16 characters"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "passwords do no match.",
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    this.password = await bcrypt.hash(this.password, 12);
    this.password_confirmation = undefined;
  } catch (error) {
    return next(error);
  }

  next();
});

userSchema.methods.correctPassword = function (
  candidatePassword,
  userPassword
) {
  return bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
