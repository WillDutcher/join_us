const express = require("express");
const { faker } = require("@faker-js/faker");
const mysql = require("mysql");
const app = express();
require("dotenv").config();

app.set("view engine", "ejs");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Routes
app.get("/", function (req, res) {
  // Find count of users in database
  let q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, function (err, results) {
    if (err) throw err;
    let count = results[0].count;
    // res.send("We have " + count + " users in our database!");
    res.render("home", { data: count });
  });
});

app.get("/joke", function (req, res) {
  // let joke =
  //   "<strong>What do you call a magician who loses his magic?</strong> <em>Ian.</em>";
  // res.send(joke);
  res.render("joke");
});

app.get("/random_num", function (req, res) {
  let num = Math.floor(Math.random() * 100) + 1;
  // res.send("Rolling a d100. You got a " + num);
  res.render("random_num", { data: num });
});

app.post("/register", function (req, res) {
  //
});

app.listen(8080, function () {
  console.log("Listening on port 8080...");
});
