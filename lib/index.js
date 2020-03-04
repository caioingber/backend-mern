const express = require("express");
const app = express();
const Eco = require("./models/Eco");
const parser = require("body-parser");

app.use(parser.json());

app.listen(3000, () => {
  console.log("Ground control to server Tom");
});

app.get("/", (req, res) => {
  Eco.find({}).then(eco => res.json(eco));
});
