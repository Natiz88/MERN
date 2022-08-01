const mysql = require("mysql");

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

exports.getUsers = function (req, res) {
  con.query("SELECT * FROM productss", function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: "users list." });
  });
};

// Retrieve user with id
exports.getSingleUsers = (req, res) => {
  console.log("get users");
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
};

exports.postUsers = function (req, res) {
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
};
exports.updateUser = function (req, res) {
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
};
//  Delete user
exports.deleteUser = function (req, res) {
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
};
