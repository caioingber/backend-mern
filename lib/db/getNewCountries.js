const fetch = require("node-fetch");
const fs = require("fs");
const url = "http://localhost:3000/country";

fetch(url)
  .then(res => res.json())
  .then(res => {
    let data = JSON.stringify(res);
    fs.writeFile("./db/data/newcountries.json", data, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("get them countries!");
      }
    });
  });
