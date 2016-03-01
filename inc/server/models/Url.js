let mongoose = require('mongoose');

let schema = new mongoose.Schema({
	token: String,
	originalUrl: String
});

module.exports = mongoose.model('Url', schema);