var express = require('express');
var bodyParser = require('body-parser');
var orm = require('../config/orm.js');
var app = express();

var gameData = [
	{name: "Bedroom", roomClass: "bedroom", frameClass: "frameIMG", text: 'you see me', button1: "item1", button2: "item2"},
	{name: "Library", roomClass: "library", frameClass: "frameIMG", text: 'you see me', button1: "item1", button2: "item2"},
	{name: "Maid's Room", roomClass: "maidsRoom", frameClass: "frameIMG", text: 'you see me', button1: "item1", button2: "item2"},
	{name: "Placeholder", roomClass: "placeholder", frameClass: "frameIMG", text: 'you see me', button1: "item1", button2: "item2"}
];

module.exports = function(app){

	app.get('/', function(req, res){
		res.render('home');
	});

	app.get('/game', function(req, res){
		var chosen = gameData[Math.floor(Math.random()*gameData.length)];
		// background.splice(chosen)
		console.log(chosen);
		res.render('game', chosen);

	});
}