const express = require("express");
const commonController = require("../controller/common");
const router = express.Router();

//home route
router.get("/", commonController.getHome);
//news route
router.get("/news", commonController.getNews);
//covid info route
router.get("/covid-19", commonController.getCovidNews);

module.exports = router;
