const express = require('express');
const castController = require('../controllers/cast.controller');
const router = express.Router();

router.get('/getCast', castController.getCastByFullName);

module.exports = router;
