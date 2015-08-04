
// Declare Dependencies

var mongoose = require('mongoose');

// Post Template

var PostSchema = new mongoose.Schema({
	title: String,
	img: {
		type: String,
		required: true
	},
	url: {
		type: String
	},
	dateCreated: Date,
	dateDeleted: {
		type: Date,
		default: null
	},
	username: {
		type: String,
		required: true
	},
	comments: [{
		body: String,
		user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		dateCreated: Date
	}]
});

// Module ready for use

mongoose.model('Post', PostSchema);
