const countryData = require("../data/countries.json");
const Country = require("../../models/Country");
const Eco = require("../../models/Eco");
const ecoData = require("../data/ecofootprintdata.json");

const footprint = ecoData.map(item => {
  const list = {
    country: item.country,
    region: item.region,
    hdi: item.hdi,
    gdpPerCapita: item.gdpPerCapita,
    cropFootprint: item.cropFootprint,
    forestFootprint: item.forestFootprint,
    carbonFootprint: item.carbonFootprint,
    ecoFootprint: item.ecoFootprint,
    totalBiocapacity: item.totalBiocapacity,
    biocapacityReserve: item.biocapacityReserve
  };
  return list;
});

Eco.remove({}).then(() => {
  Eco.create(footprint)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
});

Country.remove({}).then(() => {
  Country.create(countryData)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
});
