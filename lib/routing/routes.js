const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.get("/country", controller.countries);
router.get("/country/:name", controller.showCountries);
router.get("/region/:region", controller.showRegions);
router.get("/region/:region/:sub", controller.showSubs);

module.exports = router;
