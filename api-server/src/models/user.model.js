// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    activated: {
      type: Boolean,
      required: true
    },
    watch_list:[{
        list_name : {type: String},
        movies: [{type: mongoose.Schema.Types.ObjectId, ref:'movid_id'}],
    }],
    favorite: [{type: mongoose.Schema.Types.ObjectId, ref:'movid_id'}],
    recent_view: [{type: mongoose.Schema.Types.ObjectId, ref:'movid_id'}],
});
const User = mongoose.model('users', userSchema);

module.exports = User;