const Eco = require("../../models/Eco");

Eco.find({ country: { $type: "string" } }).then(data => console.log(data));
