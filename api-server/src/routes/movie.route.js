const express = require("express");
const accountController = require("../controllers/movie.controller");

const router = express.Router();

router.get("/find", accountController.getMovie);
router.get("/getTopRate", accountController.getTopRate);
router.get("/getLatest", accountController.getLatest);
router.get("/getInfo", accountController.getMovieById);

module.exports = router;
