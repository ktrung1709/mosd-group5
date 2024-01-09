const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movies',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    comment: {
        type: String,
        required: false,
    },
    rate: {
        type: Number,
        required: false,
    },
    time: {
        type: Date,
        required: true,
    },
});

const Feedback = mongoose.model('feedbacks', feedbackSchema);

module.exports = Feedback;