const express = require("express");
const userInfoController = require("../controllers/userInfo.controller");

const router = express.Router();

router.get("/info", userInfoController.getInfo);

router.get("/movies", userInfoController.getMovies);

router.get("/favorite", userInfoController.getFavorite);
router.put("/favorite/:id", userInfoController.addToFavorite);
router.delete("/favorite/:id", userInfoController.deleteFromFavorite);

router.get("/recent", userInfoController.getRecent);
router.put("/recent/:id", userInfoController.addToRecent);
router.delete("/recent/:id", userInfoController.deleteFromRecent);

router.get("/list/:name", userInfoController.getListInfo);
router.get("/lists", userInfoController.getLists);
router.put("/list/:name", userInfoController.createList);
router.put("/list/:name/:id", userInfoController.addToList);
router.delete("/list/:name", userInfoController.deleteList);
router.delete("/list/:name/:id", userInfoController.deleteFromList);

module.exports = router;
