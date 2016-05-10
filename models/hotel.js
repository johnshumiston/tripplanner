var Sequelize = require('sequelize');
var db = require('./database');

var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING
	},
	num_stars: {
		type: Sequelize.INTEGER,
		max: 5,
		min: 1
	},
	amenities: {
		type: Sequelize.STRING
	}
});

module.exports = Hotel;