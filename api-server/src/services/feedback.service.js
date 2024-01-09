const Feedback = require('../models/feedback.model');

exports.createFeedback = async (feedback) => {
    return Feedback.create(feedback);
}

exports.getFeedbackByMovie = async (movieId) => {
    return Feedback.find({movie: movieId}).populate('user');
}

exports.getFeedbackByMovieAndUser = async (userId, movieId) => {
    return Feedback.find({movie: movieId, user: userId});
}

exports.updateFeedback = async (feedbackId, feedback) => {
    return Feedback.findOneAndUpdate({_id: feedbackId}, feedback, {new: true});
}

exports.deleteFeedback = async (feedbackId) => {
    return Feedback.deleteOne({_id: feedbackId});
}