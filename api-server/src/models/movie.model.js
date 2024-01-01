const mongoose = require('mongoose');
const { ObjectId } = require('bson');

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
    thumnail: {
        type: String
    },
    image: {
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
    comments: [{ type: String }],
    image: {
        type: String,
        required: false,
    },
    director: {
        type: Array,
        required: true,
    },
    cast: [{ type: Object }],
    duration: {
        type: Number,
        required: true,
    },
});
const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;