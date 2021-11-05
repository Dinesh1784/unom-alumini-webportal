const express = require("express");
const privateController = require("../controller/private");
const router = express.Router();

router.get("/main", privateController.getHomepage);

module.exports = router;
