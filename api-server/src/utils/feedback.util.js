const { Types } = require('mongoose');
const feedbackService = require("../services/feedback.service");

function sanitizeFeedback(data, movieId, userId) {
    let feedback = {}
    feedback.movie = movieId;
    feedback.user = userId;
    feedback.time = Date.now();
    feedback.comment = data.comment ?? null;
    feedback.rate = data.rate ?? null;
    if (feedback.rate < 0 || feedback.rate > 10) {
        throw new Error('Rate must be in range [0, 10]');
    }
    if (feedback.comment === null && feedback.rate === null) {
        throw new Error('Feedback must have at least one of comment or rate');
    }
    return feedback;
}

function sanitizeMovieID(movieId) {
    if (!Types.ObjectId.isValid(movieId)) {
        throw new Error('Invalid movie ID');
    }
    return new Types.ObjectId(movieId);
}

async function getFeedbackIDByMovieAndUser(userId, movieId, force = true) {
    let feedbackId = (await feedbackService.getFeedbackByMovieAndUser(userId, movieId))[0]?._id;
    if (!feedbackId && force) {
        throw new Error('Feedback not found');
    }
    return feedbackId;
}

module.exports = { sanitizeFeedback, sanitizeMovieID, getFeedbackIDByMovieAndUser };