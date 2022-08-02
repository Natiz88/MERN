const first = (req, res, next) => {
  console.log("middlewares in action.");
  next();
};

module.exports = first;
