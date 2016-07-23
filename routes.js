var UserModel = require('./models/User.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var orm = require('./config/orm.js');


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

module.exports = function(app){

	//GETs

	app.get('/', function(req, res){
		res.render('home', {
			message: req.flash('error')[0],
		});
	});

	app.get('/signin', function(req, res){
		res.redirect('/')
	});

	app.get('/signup', function(req, res){
		res.render('newPlayer');
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

	app.get('/end', function(req, res) {
			orm.selectAllOrdered('game_data').then(function(data){
				//console.log (data);
				res.render('end', {scores: data});				
			})
		});

	app.get('/authenticated', function(req,res){
		if (req.isAuthenticated()) {
			res.render('game', {
				username: req.user.username
			})
		} else {
			res.redirect('/')
		}
	});

	app.get('/logout', function(req, res){
	  req.logout();
	  res.redirect('/');
	});

	//POSTs

	app.post('/signin', passport.authenticate('local',{failureRedirect:'/', failureFlash:'Wrong Username or Password'}), function(req, res){
		res.redirect('/authenticated');
	});

	app.post('/signup', function(req, res){
		var user = new UserModel(req.body);
		UserModel.saveUser(user, function(status){
			if(!status) {
				res.redirect('/newPlayer')
				return false
			}
			res.redirect('/');
		});

		//route to post to mysql
		app.post('/choice', function(req, res) {
			console.log(req.body);
			//orm.itemChoice('game_data', 'Scotch', "Seymour Butz").then(function(data){});
		});
	});

};