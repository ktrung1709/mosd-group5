const feedbackController = require('../controllers/feedback.controller');
const express = require('express');

const router = express.Router();

router.post('/:movieId', feedbackController.createFeedback);
router.get('/:movieId', feedbackController.getFeedbackByMovie);
router.put('/:movieId', feedbackController.updateFeedback);
router.delete('/:movieId', feedbackController.deleteFeedback);

module.exports = router;