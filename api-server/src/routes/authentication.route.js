const express = require("express");
const authController = require("../controllers/authentication.controller");
const verifyToken = require("../utils/account.util")

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.get("/logout", authController.logout);

module.exports = router;
