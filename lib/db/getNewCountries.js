const fetch = require("node-fetch");
const fs = require("fs");
const url = "http://localhost:3000/";

fetch(url)
  .then(res => res.json())
  .then(res => {
    let data = JSON.stringify(res);
    console.log(data);
  });
