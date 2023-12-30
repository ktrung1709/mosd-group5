const { default: mongoose } = require('mongoose');
const Schema = mongoose.Schema;
const feedbackSchema = new Schema(
    {
        movie: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'movie.model',
        },
        rating: Number,
        feedback: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'user.model',
                },
                comment: { type: String, required: true },
                rate: Number,
            },
        ],
    },
);

const Feedback = mongoose.model('feedbacks', feedbackSchema);

module.exports = Feedback;