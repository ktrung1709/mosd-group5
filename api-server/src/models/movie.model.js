const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

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
    language: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    thumbnail: {
        type: String
    },
    rate: {
        type: Number,
    },
    time: {
        type: String
    },
    videoUrl: {
        type: String,
    },
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