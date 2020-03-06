const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.get("/all", controller.countries);
router.get("/country/:name", controller.showCountries);
router.delete("/all/:id", controller.deleteId);
router.get("/excess", controller.showExcessReserve);
router.get("/deplete", controller.showDepletedReserve);
router.post("/all", controller.newCountry);

module.exports = router;
