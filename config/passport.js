
// Declare Dependencies

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

// Setup Passport Strategy for User login

passport.use(new LocalStrategy(function(userName, password, done) {
	User.findOne({userName: userName}, function(err, user) {
		if(err) return done(err);
		if(!user) return done(null, false, {message: 'Invalid username.'});
		if(!user.validatePassword(password)) return done(null, false, {message: 'Invalid password'});
		return done(null, user);
	});
}));