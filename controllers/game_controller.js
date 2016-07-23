//requires files to process requests to server
var express = require('express');
var bodyParser = require('body-parser');
var orm = require('../config/orm.js');
var app = express();

var winArray = ["Scotch","Key","Phone"];

var otherArray = ["Magnifier","Rope","Candlestick"];

//game play data 
var gameData = [
	{name: "Bedroom", roomClass: "bedroom", frameClass: "frameIMG", text: 'you see me', button1: winArray[1], button2: otherArray[1], path: "/game"},
	{name: "Library", roomClass: "library", frameClass: "frameIMG", text: 'you see me', button1: winArray[2], button2: otherArray[2], path: "/game"},
	{name: "Maid's Room", roomClass: "maidsRoom", frameClass: "frameIMG", text: 'you see me', button1: otherArray[0], button2: winArray[0], path: "/game"},
];



//page render program
module.exports = function(app){
	
	if (gameData.length == 1) {
		for (var i=0; i++; i<gameData.length) {
			gameData[i].path = '/end';
		}
	}

		app.get('/end', function(req, res) {
			orm.selectAllOrdered('game_data').then(function(data){
				//console.log (data);
				res.render('end', {scores: data});				
			})
		});

	//logic to cover game beginning to end
	// if(gameData.length > 0) {
		//home page / sign-in form 
		app.get('/', function(req, res) {
			res.render('home');
		});
		//game pages with random starting position
		app.get('/game', function(req, res) {
			var randomIndex = Math.floor(Math.random()*gameData.length);
			var chosen = gameData[randomIndex];
			console.log(chosen);
			console.log(gameData.length);
			res.render('game', chosen);
			gameData.splice(randomIndex, 1);
		});
		app.post('/choice', function(req, res) {
			console.log(req.body);
			//orm.itemChoice('game_data', 'Scotch', "Seymour Butz").then(function(data){});
		});
	// } else if (gameData.length == 0) {

		if (gameData.length == 0 ) {
			//final page to display results and scores
			app.get('/?', function(req, res) {	
				res.render('end');
			});
		}
}