const express = require("express");
const accountController = require("../controllers/movie.controller");

const router = express.Router();

router.get("/find", accountController.getMovie);

module.exports = router;
