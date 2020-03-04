const countryData = require("../data/countries.json");
const Country = require("../../models/Country");
const Eco = require("../../models/Eco");
const ecoData = require("../data/ecofootprintdata.json");

Eco.find({}).then(footprints => {
  footprints.forEach(footprint => {
    Country.findOne({ name: footprint.country }).then(country => {
      footprint.country = country;
      footprint.save();
    });
  });
  console.log(footprints);
});
