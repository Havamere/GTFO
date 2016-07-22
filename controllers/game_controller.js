// $(document).ready(function () {

	//requires files to process requests to server
	var express = require('express');
	var bodyParser = require('body-parser');
	var orm = require('../config/orm.js');
	var app = express();

	var winArray = ["Scotch","Key","Phone"];

	var otherArray = ["Magnifier","Rope","Candlestick"];
	//game play data 
	var gameData = [
		{name: "Bedroom", roomClass: "bedroom", frameClass: "frameIMG", text: 'you see me', button1: winArray[1], button2: otherArray[1]},
		{name: "Library", roomClass: "library", frameClass: "frameIMG", text: 'you see me', button1: winArray[2], button2: otherArray[2]},
		{name: "Maid's Room", roomClass: "maidsRoom", frameClass: "frameIMG", text: 'you see me', button1: otherArray[0], button2: winArray[0]},
	];

	var game = require('../models/game.js');

	//page render program
	module.exports = function(app){
		app.get('/end', function(req, res) {
				res.render('end');
			});
		//logic to cover game beginning to end
		if(gameData.length > 0) {
			//home page / sign-in form 
			app.get('/', function(req, res) {
				res.render('home');
			});
			//game pages with random starting position
			app.get('/game', function(req, res) {
				var randomIndex = Math.floor(Math.random()*gameData.length);
				var chosen = gameData[randomIndex];
				console.log(chosen);
				res.render('game', chosen);
				gameData.splice(randomIndex, 1);
			});
		} else {
			//final page to display results and scores
			app.get('/end', function(req, res) {
				res.render('end');
			});
		}
	};

	// **************************************
	// $(".btn").click(function(){

	//     name=$("#playerName").val();
	//     pass=$("#playerPass").val();
	    
	//     console.log(name + pass);
	//     // * Perform some validation here.
	    
	// 	var playerName = $("input[id='playerName']").val();
	// 	var playerPass = $("input[id='playerPass']").val();

	// 	console.log(playerName + playerPass);
	// 	// orm.checkSavedPlayer('game_data', 'player_name', playerName, playerPass);
	// 	game.newPlayer(playerName, playerPass);

	   //  $.post("http://localhost:3000/login",{name:name,pass:pass},function(data){        
	   //      if(data==='done')           
	   //      {
	  	// console.log(name);
	   //        window.location.href="/admin";
	   //      }
	   //  });
	// });
// });

