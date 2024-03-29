const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("mongodb database connected"))
  .catch((err) => console.log("error mongo", err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`app is started at ${port}`));
