const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to You ");
});

app.listen(3000, (req, res) => {
  console.log(`server running at http://localhost:3000`);
});
