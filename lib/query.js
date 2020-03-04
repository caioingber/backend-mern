const Country = require("./models/Country");
const Eco = require("./models/Eco");

Eco.find({})
  .then(countries => {
    countries.forEach(location => {
      if (typeof location.country === "string") {
        Eco.updateOne(
          { country: location.country },
          { $set: { gdpPerCapita: gdpDecimal } },
          { new: false }
        );
        console.log(location.country);
      } else {
        console.log(location.country.name);
      }
    });
  })
  .catch(err => {
    console.log(err);
  });

// let test = parseFloat("1023.44");
// console.log(test);
