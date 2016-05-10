var express = require('express');
var router = express.Router();
// var models = require('../models');
var place = require('../models/place');
var activity = require('../models/activity');
var restaurant = require('../models/restaurant');
var hotel = require('../models/hotel');
var $ = require("jquery");


router.get('/main', function(req, res, next){
	Promise.all([hotel.findAll({}), restaurant.findAll({}), activity.findAll({})])
	.then(function(results) {
		var hotel = results[0];
		var restaurant = results[1];
		var activity = results[2];
		res.render('layout', {
			hotels: hotel,
			restaurants: restaurant,
			activities: activity
		});
	})
	.catch(next);
});









module.exports = router;