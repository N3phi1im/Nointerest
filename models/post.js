var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({ 
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

mongoose.model('Post', PostSchema);