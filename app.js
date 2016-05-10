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
var path = require('path');


app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, './templates'));
app.use('/', require('./routes/index'));

// app.get('/', function(req, res, next){
// 	Promise.all([Hotel.findAll({}), Restaurant.findAll({}), Activity.findAll({})])
// 	.then(function(pages){
// 		res.json(pages);
// 	});
// });

// app.get('/main', function(req, res, next){
// 	Hotel.findAll({})
// 	.then(function(hotel) {
// 		res.render('main', {hotel: hotel})
// 	})
// 	.catch(next);
// })

app.listen(2421, function(req, res, next){
	console.log('So essited for our big trip!');

});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
});

module.exports = app;