// config/database.js
const mongoose = require('mongoose');
const {DB} = require('./main.config');

mongoose.connect(DB.CON_STRING + DB.NAME);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = db;
