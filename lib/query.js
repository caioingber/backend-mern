const Country = require("./models/Country");
const Eco = require("./models/Eco");

// Eco.findByIdAndRemove({ country: { $type: "string" } }).then(data =>
//   console.log(data)
// );

Eco.find({ "country.name": "Albania" }).then(data => {
  console.log(data);
});
