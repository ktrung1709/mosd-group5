// models/Movie.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: [{
        type: String,
    }],
    releaseDate: {
        type: Date,
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
});
const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;