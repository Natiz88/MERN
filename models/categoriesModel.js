const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const categoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required."],
    trim: true,
  },
});

const categories = mongoose.model("categories", categoriesSchema);

module.exports = categories;
