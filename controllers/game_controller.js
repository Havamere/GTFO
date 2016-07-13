var express = require('express');
var bodyParser = require('body-parser');
var orm = require('../config/orm.js');
var app = express();

module.exports = function(app){

	app.get('/', function(req, res){
		res.render('home');
	});

}