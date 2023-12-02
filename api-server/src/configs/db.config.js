// config/database.js
const mongoose = require('mongoose');
const {DB_STRING, DB_NAME} = process.env;

mongoose.connect(DB_STRING + DB_NAME);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
