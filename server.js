
// Declare Dependencies

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

// Models for Passport

require('./models/user');
require('./config/passport');

// Connect to the DB

mongoose.connect('mongodb://localhost/NoInterest');

// Routing

var userRoute = require('./routes/userRoute');

// Set Port for Server

var port = process.env.PORT || 3000;

// Setup Paths

app.set('views', path.join(__dirname, 'views'));

// Set the view engine that will render HTML from the server to the client

app.engine('.html', require('ejs').renderFile);

// Allow for these directories to be usable on the client side

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

// Render Html using engine

app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

// Middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());

// On load, render the index page

app.get('/', function(req, res) {
	res.render('index');
});

// Use Routes for server

app.use('/v1/api/Users', userRoute);

// Start server Listening at set Port

var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Server started on port:' + port);
});