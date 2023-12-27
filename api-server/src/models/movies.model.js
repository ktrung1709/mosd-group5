// models/Movie.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
    comments: [{type: String}],
});
const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;