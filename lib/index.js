const express = require("express");
const app = express();
const Eco = require("./models/Eco");
const parser = require("body-parser");
const router = require("./routing/routes");

app.use(parser.json());
app.use("/", router);

// app.get("/", (req, res) => {
//   res.redirect("http://localhost:3000/country");
// });

app.get("/", (req, res) => {
  for (const key in req.query) {
    res.json(key, req.query[key]);
  }
});

app.listen(3000, () => {
  console.log("Ground control to server Tom");
});
