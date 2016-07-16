var express = require('express');
var bodyParser = require('body-parser');
var orm = require('../config/orm.js');
var app = express();

var background = [
	{url: "img/just_right_bedroom.jpg"},
	{url: "img/just_right_library.jpg"},
	{url: "img/just_right_maids_room.jpg"},
	{url: "img/just_right_abandonded_library.jpg"}
];

module.exports = function(app){

	app.get('/', function(req, res){
		res.render('home');
	});

	app.get('/game', function(req, res){
		var chosen = background[Math.floor(Math.random()*background.length)];
		console.log(chosen);
		res.render('game', chosen);

	});
}