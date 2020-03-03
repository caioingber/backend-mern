const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/eco_footprint", {
  useNewUrlParser: true
});
module.exports = mongoose;
