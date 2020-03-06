const express = require("express");
const app = express();
const parser = require("body-parser");
const router = require("./routing/routes");

app.use(parser.json());
app.use("/", router);

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.redirect("/all");
});

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
