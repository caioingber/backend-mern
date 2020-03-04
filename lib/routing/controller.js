const Eco = require("../models/Eco");

const Routes = {
  countries: (req, res) => {
    if (req.query) {
      Eco.find(req.query).then(eco => {
        res.json(eco);
      });
    } else {
      Eco.find({}).then(eco => {
        res.json(eco);
      });
    }
  },
  showCountries: (req, res) => {
    Eco.find({ "country.name": req.params.name }).then(data => {
      res.json(data);
    });
  },
  showRegions: (req, res) => {
    Eco.find({ "country.region": req.params.region }).then(data => {
      res.json(data);
    });
  },
  showSubs: (req, res) => {
    Eco.find({ "country.subregion": req.params.sub }).then(data =>
      res.json(data)
    );
  }
};

module.exports = Routes;
