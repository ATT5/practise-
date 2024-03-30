const express = require("express");

const app = express();

app.use("/users", (req, res) => {
  console.log("users");
  res.send("<h1>Welcome Users</h1>");
});

app.use("/", (req, res) => {
  console.log("hello");
  res.send("<h1>Welcome</h1>");
});

app.listen(3000);
