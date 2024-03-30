const express = require("express");

const app = express();

app.use("/add", (req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>The add product page</h1>");
  res.send('<form><input type=''/></form>')
});

app.use("/", (req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Hello form express</h1>");
});

app.listen(3000);
console.log('hello')