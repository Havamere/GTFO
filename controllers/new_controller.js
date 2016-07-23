var express = require('express');
var bodyParser = require('body-parser');
var orm = require(__dirname +'/../config/orm.js');
var UserModel = require('../User.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var routes = require('../routes.js');
var gameData = require('./gamedata.js')
var UserModel = require('../models/User.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var story = require('../public/assets/js/story.js');
var app = express();

//Setting the strategy for Passport
passport.use(new LocalStrategy({passReqToCallback : true},
  function(req, username, password, done) {

  	//Searching the ORM for the user in the database
  	orm.findUser(username, function(err, user){
  		user = user[0];
  		if (err) { return done(err); }
      if (!user) { return done(null, false); }

      //comparing user passwords - return if not a match
      if (password !== user.password) { return done(null, false);}

      return done(null, user);
  	});
  }
));

//These two methods are required to keep the user logged in via the session
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

var winArray = ["Scotch","Key","Phone"];

var otherArray = ["Magnifier","Rope","Candlestick"];

var gameData = [
	{name: "Bedroom", roomClass: "bedroom", frameClass: "frameIMG", text: story.masterBed, button1: winArray[1], button2: otherArray[1]},
	{name: "Library", roomClass: "library", frameClass: "frameIMG", text: story.library, button1: winArray[2], button2: otherArray[2]},
	{name: "Maid's Room", roomClass: "maidsRoom", frameClass: "frameIMG", text: story.maidBed, button1: otherArray[0], button2: winArray[0]},
];

module.exports = function(app){


		app.get('/', function(req, res){
			res.render('home', {			
				welcomeText: "Sign In",
				actionBtn: 'signin',
				message: req.flash('error')[0],
				otherAction: "Signup"
			});
		});

		app.get('/signup', function(req, res){
			res.render('index', {
				welcomeText: "Sign Up",
				actionBtn: 'signup',
				otherAction: "Signin"
			});
		});

		app.get('/authenticated', function(req,res){
			if (req.isAuthenticated()) {
				res.render('authenticated', {
					username: req.user.username
				})
			} else {
				res.redirect('/')
			}
		});


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
	
		app.post('/signin', passport.authenticate('local',{failureRedirect:'/', failureFlash:'Wrong Username or Password'}), function(req, res){
			res.redirect('/authenticated');
		});

		app.post('/signup', function(req, res){
			var user = new UserModel(req.body);
			UserModel.saveUser(user, function(status){
				if(!status) {
					res.redirect('/signup')
					return false
				}
				res.redirect('/');
			});
		});

		app.get('/end', function(req, res) {
			orm.selectAllOrdered('game_data').then(function(data){
				//console.log (data);
				res.render('end', {scores: data, stories: story});				
			})
		});

};
