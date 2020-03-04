const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Region = new Schema({
  region: String,
  countries: []
});

module.exports = mongoose.model("Region", Region);
