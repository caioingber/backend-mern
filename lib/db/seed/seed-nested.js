const Country = require("../../models/Country");
const Eco = require("../../models/Eco");

Eco.find({})
  .then(footprints => {
    footprints.forEach(footprint => {
      Country.findOne({ name: footprint.country }).then(country => {
        if (country) {
          footprint.country = country;
          footprint.save();
        }
      });
    });
    console.log(footprints);
  })
  .then(() => {
    process.exit();
  });
