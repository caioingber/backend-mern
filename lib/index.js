const express = require("express");
const app = express();
const Eco = require("./models/Eco");
const parser = require("body-parser");
const router = require("./routing/routes");

app.use(parser.json());
app.use("/", router);

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.redirect("port/all");
});

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
