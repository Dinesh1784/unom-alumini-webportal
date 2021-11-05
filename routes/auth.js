const express = require("express");
const authController = require("../controller/auth");
const router = express.Router();

//register page
router.get("/register", authController.getRegister);
//login page
router.get("/login", authController.getLogin);
//resetPassword page
router.get("/reset-password", authController.getResetPassword);

module.exports = router;
