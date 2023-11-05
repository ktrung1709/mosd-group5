const express = require("express");
const authController = require("../controllers/authentication.controller");

const router = express.Router();

router.post("/user/signup", authController.signup);
router.post("/user/signin", authController.signin);

module.exports = router;
