const Country = require("./models/Country");
const Eco = require("./models/Eco");

Eco.deleteMany({ country: { $type: "string" } }).then(data =>
  console.log(data)
);
