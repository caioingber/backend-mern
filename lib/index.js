const express = require("express");
const app = express();
const Eco = require("./models/Eco");
const parser = require("body-parser");

app.use(parser.json());

app.listen(3000, () => {
  console.log("Ground control to server Tom");
});

//Root index
app.get("/", (req, res) => {
  res.redirect("http://localhost:3000/country");
});

//By country
app.get("/country", (req, res) => {
  Eco.find({}).then(eco => {
    res.json(eco);
    console.log(eco.length);
  });
});

app.get("/country/:name", (req, res) => {
  let bool = false;
  Eco.find({ "country.name": req.params.name }).then(data => {
    if (data[0].country.name) {
      res.json(data);
      bool = true;
    } else {
      bool = true;
    }
  });
  if (bool === true) {
    Eco.find({ country: req.params.name }).then(data => {
      res.json(data);
    });
  }
});
