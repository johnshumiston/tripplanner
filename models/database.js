var Sequelize = require('Sequelize');
var Promise = require('bluebird');

var db = new Sequelize('postgres://localhost:5432/tripplanner', {
  logging: false
});

module.exports = db;