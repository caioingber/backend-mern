const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Eco = new Schema({
  country: {},
  region: String,
  hdi: Number,
  gdpPerCapita: String,
  cropFootprint: Number,
  forestFootprint: Number,
  carbonFootprint: Number,
  ecoFootprint: Number,
  totalBiocapacity: Number,
  biocapacityReserve: Number
});

module.exports = mongoose.model("Eco", Eco);
