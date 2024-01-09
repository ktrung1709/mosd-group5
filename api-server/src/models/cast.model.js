const mongoose = require('mongoose');
const { ObjectId } = require('bson');

const castSchema = new mongoose.Schema({
    birth: {
        type: Date,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    image: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
    },
    films: [{ type: mongoose.Schema.Types.ObjectId, ref: 'movies' }]
});
const Cast = mongoose.model('casts', castSchema);

module.exports = Cast;