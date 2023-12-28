const express = require("express");
const accountController = require("../controllers/account.controller");

const router = express.Router();

router.post("/activate", accountController.activate);

module.exports = router;
