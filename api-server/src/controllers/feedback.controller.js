const feedbackService = require('../services/feedback.service');
const {
    sanitizeFeedback,
    sanitizeMovieID,
    getFeedbackIDByMovieAndUser
} = require('../utils/feedback.util');

exports.createFeedback = async (req, res) => {
    try {
        let movieId = sanitizeMovieID(req.params.movieId);
        let feedback = sanitizeFeedback(req.body, movieId, req.user._id);

        let isExistFeedback = await getFeedbackIDByMovieAndUser(req.user._id, movieId, false);
        if (isExistFeedback) {
            throw new Error('Feedback already exists');
        }

        let result = await feedbackService.createFeedback(feedback);
        res.json(result);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
}

exports.getFeedbackByMovie = async (req, res) => {
    try {
        let movieId = sanitizeMovieID(req.params.movieId);
        let result = await feedbackService.getFeedbackByMovie(movieId);
        res.json(result);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
}

exports.updateFeedback = async (req, res) => {
    try {
        let movieId = sanitizeMovieID(req.params.movieId);
        let feedback = sanitizeFeedback(req.body, movieId, req.user._id);
        feedback.movie = movieId;
        let feedbackId = await getFeedbackIDByMovieAndUser(req.user._id, movieId);
        let result = await feedbackService.updateFeedback(feedbackId, feedback);
        res.json(result);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
}

exports.deleteFeedback = async (req, res) => {
    try {
        let movieId = sanitizeMovieID(req.params.movieId);

        let feedbackId = await getFeedbackIDByMovieAndUser(req.user._id, movieId);
        let result = (await feedbackService.deleteFeedback(feedbackId));
        res.json(result);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
}