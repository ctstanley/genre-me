var mongoose = require("mongoose");

var genreSchema = new mongoose.Schema({
	name: {
		type: String,
		lowercase: true,
		required: true,
		index: {
			unique: true
			}
		},
	users: {
		type: Array,
		}
	});

var Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;