var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
var Place = require('./models/place');
var Hotel = require('./models/hotel');
var Restaurant = require('./models/restaurant');
var Activity = require('./models/activity');
var db = require('./models/database');
var Promise = require('bluebird');


// app.use('/', function(req, res, next){
// 	res.send('hey what do you want');
// });

// app.use('/', require('./routes/index'));

app.get('/', function(req, res, next){
	Promise.all([Hotel.findAll({}), Restaurant.findAll({}), Activity.findAll({})])
	.then(function(pages){
		res.json(pages);
	});
});

app.listen(2421, function(req, res, next){
	console.log('So essited for our big trip!');

});

module.exports = app;