const express = require("express");
const app = express();
const Eco = require("./models/Eco");
const parser = require("body-parser");
const router = require("./routing/routes");

app.use(parser.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.redirect("http://localhost:3000/country");
});

app.listen(3000, () => {
  console.log("Ground control to server Tom");
});

// //Root index
// app.get("/", (req, res) => {
//   res.redirect("http://localhost:3000/country");
// });

// //By country
// app.get("/country", (req, res) => {
//   Eco.find({}).then(eco => {
//     res.json(eco);
//   });
// });

// app.get("/country/:name", (req, res) => {
//   Eco.find({ "country.name": req.params.name }).then(data => {
//     res.json(data);
//   });
// });
