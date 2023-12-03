const express = require("express");
const userInfoController = require("../controllers/userInfo.controller");

const router = express.Router();

router.get("/info", userInfoController.getInfo);
router.get("/movies", userInfoController.getMovies);

//router.get("/favorite", userInfoController.getFavorite);
//router.put("/favorite/:id", userInfoController.addToFavorite);
// router.get("/recent", userInfoController.getRecent);
// router.get("/list/:name", userInfoController.getListInfo);
// router.get("/lists", userInfoController.getLists);

module.exports = router;
