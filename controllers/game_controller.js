//requires files to process requests to server
var express = require('express');
var bodyParser = require('body-parser');
var orm = require('../db/orm.js');
var story = require('../public/assets/js/story.js')
var app = express();

var winArray = ["Scotch","Key","Phone"];

var otherArray = ["Magnifier","Rope","Candlestick"];

//game play data 
var gameData = [
	{name: "Bedroom", roomClass: "bedroom", frameClass: "frameIMG", text: story.masterBed, button1: winArray[1], button2: otherArray[1], path: "/game"},
	{name: "Library", roomClass: "library", frameClass: "frameIMG", text: story.library, button1: winArray[2], button2: otherArray[2], path: "/game"},
	{name: "Maid's Room", roomClass: "maidsRoom", frameClass: "frameIMG", text: story.maidBed, button1: otherArray[0], button2: winArray[0], path: "/game"},
];



//page render program
module.exports = function(app){


	//logic to cover game beginning to end
		//home page / sign-in form 
		app.get('/', function(req, res) {
			if (gameData.length == 0) {
				res.redirect('/end');
			};
			res.render('home');
		});
		//game pages with random starting position
		app.get('/game', function(req, res) {
			var randomIndex = Math.floor(Math.random()*gameData.length);
			var chosen = gameData[randomIndex];
			console.log(chosen);
			console.log(gameData.length);
			if (gameData.length == 0) {
				res.redirect('/end');
			} else {
				res.render('game', chosen);
			}
			gameData.splice(randomIndex, 1);
		});
		//route to post to mysql
		app.post('/choice', function(req, res) {
			console.log(req.body);
			//orm.itemChoice('game_data', 'Scotch', "Seymour Butz").then(function(data){});
		});
		//summary page to display results and scores
		app.get('/end', function(req, res) {
			orm.selectAllOrdered('game_data').then(function(data){
				//console.log (data);
				res.render('end', {scores: data, stories: story});				
			})
		});
}