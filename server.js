const mysql = require("mysql");
const express = require("express");
var bodyParser = require("body-parser");

const port = 5000;

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test1",
});

con.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

// con.query("SELECT * FROM productss", (err, rows) => {
//   if (err) throw err;

//   console.log("Data received from Db:");
//   console.log(rows);
// });

// con.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all remaining queries are executed
//   // Then sends a quit packet to the MySQL server.
// });
con.query("SELECT * FROM productss", (err, rows) => {
  if (err) throw err;

  rows.forEach((element) => {
    console.log(element);
  });
});

app.get("/users", function (req, res) {
  con.query("SELECT * FROM productss", function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: "users list." });
  });
});
// Retrieve user with id
app.get("/users/:id", function (req, res) {
  let user_id = req.params.id;
  if (!user_id) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide user_id" });
  }
  con.query(
    "SELECT * FROM productss where pid=?",
    user_id,
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results[0],
        message: "users list.",
      });
    }
  );
});

app.post("/users", function (req, res) {
  let name = req.body.name;
  let addrss = req.body.address;
  console.log("userrr", name);
  if (!name || !addrss) {
    return res.status(400).send({ error: true, message: name });
  }
  con.query(
    "INSERT INTO productss SET ? ",
    { name: name, addrss: addrss },
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "New user has been created successfully.",
      });
    }
  );
});
app.put("/users/:id", function (req, res) {
  let user_id = req.params.id;
  let name = req.body.name;
  let addrss = req.body.address;
  if (!user_id || !name || !addrss) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide user and user_id" });
  }
  con.query(
    "UPDATE productss SET name = ? ,addrss=?  WHERE pid = ?",
    [name, addrss, user_id],
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "user has been updated successfully.",
      });
    }
  );
});
//  Delete user
app.delete("/users/:id", function (req, res) {
  let user_id = req.params.id;
  if (!user_id) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide user_id" });
  }
  con.query(
    "DELETE FROM productss WHERE pid = ?",
    [user_id],
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "User has been Deleted successfully.",
      });
    }
  );
});

app.listen(port, "192.168.100.22", () => console.log("app is started at 5000"));
