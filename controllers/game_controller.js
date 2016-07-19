var express = require('express');
var bodyParser = require('body-parser');
var orm = require('../config/orm.js');
var items = require('../public/assets/js/app.js');
var app = express();



	// {name: "Placeholder", roomClass: "placeholder", frameClass: "frameIMG", text: 'you see me', button1: "item1", button2: "item2"}

var gameData = [
	{name: "Bedroom", roomClass: "bedroom", frameClass: "frameIMG", text: 'you see me', button1: items.winArray[1], button2: items.otherArray[1]},
	{name: "Library", roomClass: "library", frameClass: "frameIMG", text: 'you see me', button1: items.winArray[2], button2: items.otherArray[2]},
	{name: "Maid's Room", roomClass: "maidsRoom", frameClass: "frameIMG", text: 'you see me', button1: items.otherArray[0], button2: items.winArray[0]},
];

module.exports = function(app){
	if(gameData.length > 0){

		app.get('/', function(req, res){
			res.render('home');
		});

		app.get('/game', function(req, res){
			var randomIndex = Math.floor(Math.random()*gameData.length);
			var chosen = gameData[randomIndex];
			// background.splice(chosen)
			console.log(chosen);
			res.render('game', chosen);
			gameData.splice(randomIndex, 1);
		console.log(gameData);
		});
	}
}