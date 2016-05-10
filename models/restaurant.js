var Sequelize = require('sequelize');
var db = require('./database')

var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING
	},
	cuisine: {
		type: Sequelize.STRING
	},
	price: {
		type: Sequelize.INTEGER,
		max: 5,
		min: 1
	}	
});

module.exports = Restaurant;