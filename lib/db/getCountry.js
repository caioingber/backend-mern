const fetch = require("node-fetch");
const fs = require("fs");
const url = "https://restcountries.eu/rest/v2/all";

fetch(url)
  .then(res => res.json())
  .then(res => {
    let data = JSON.stringify(res);
    fs.writeFile("./db/data/countries.json", data, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("get them countries!");
      }
    });
  });
