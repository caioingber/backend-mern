const countryData = require("../data/countries.json");
const Country = require("../../models/Country");

Country.remove({}).then(() => {
  Country.create(countryData)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
});
