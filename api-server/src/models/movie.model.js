const mongoose = require('mongoose');
const {ObjectId} = require('bson');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    categories: [{
        type: String,
    }],
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    rating: {
        type: Number,
    },
    videoUrl: {
        type: String,
    },
    comments: [{type: String}],
    image: {
        type: String,
        required: false,
    },
    director: {
        type: Array,
        required: true,
    },
    cast: {
        type: Array,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
});
const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;