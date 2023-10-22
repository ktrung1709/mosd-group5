const express = require("express");
const authController = require("../controllers/authentication.controller");

const router = express.Router();

router.post("/user/signup", authController.signup);

module.exports = router;
