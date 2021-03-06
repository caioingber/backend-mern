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
  deleteId: (req, res) => {
    Eco.findOneAndRemove({ _id: req.params.id }).then(eco => {
      res.json(eco);
    });
  },
  showCountries: (req, res) => {
    let word = req.params.name;
    word = word[0].toUpperCase() + word.substr(1);
    Eco.find({ "country.name": word }).then(data => {
      res.json(data);
    });
  },
  showExcessReserve: (req, res) => {
    Eco.find({ biocapacityReserve: { $gte: 0 } }).then(data => {
      res.json(data);
    });
  },
  showDepletedReserve: (req, res) => {
    Eco.find({ biocapacityReserve: { $lt: 0 } }).then(data => {
      res.json(data);
    });
  },
  newCountry: (req, res) => {
    Eco.create(req.body).then(data => {
      res.json(data);
    });
  }
};

module.exports = Routes;
