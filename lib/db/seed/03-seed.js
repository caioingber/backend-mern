const Eco = require("../../models/Eco");
const data = require("../data/newcountries.json");

Eco.remove({}).then(() => {
  Eco.create(data)
    .then(data => {
      console.log(data);
      process.exit();
    })
    .then(() => {
      process.exit();
    })
    .catch(err => {
      console.log(err);
    });
});
