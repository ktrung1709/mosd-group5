const express = require("express");
const accountController = require("../controllers/movie.controller");
const movieController = require("../controllers/movie.controller");

const router = express.Router();

router.get("/find", accountController.getMovie);
router.get("/get-feedbacks", movieController.getFeedback);
router.post("/post-feedbacks", movieController.postFeedback);



module.exports = router;
