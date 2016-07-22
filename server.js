//dependancies needed for server file
var express = require('express');
// var flash = require('connect-flash');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var connection = require('./config/connection.js');
var path = require('path');
// var passport = require('passport');
var session = require('express-session');
// var orm = require('./db/orm.js');


// ORM
var orm = require('./config/orm.js');


//sets express calls for use
var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public/assets'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({secret: 'ssshhhhh', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//gets and uses game specific orms
require('./controllers/game_controller.js')(app);

// Routes
// require('./routes/html-routes.js')(app);

var port = 3000;
//confirms active server in node
app.listen(port, function() {
    console.log("Listening on PORT " + port);
});


// ******************************************************
var game = {
    updateItem: function(item, bool, name) {
    	orm.updateItem('game_data', item, bool, 'player_name', name);
    },
    checkSavedPlayer: function(name, password){
    	orm.checkSavedPlayer('game_data', 'player_name', name, password);
    },
    newPlayer: function(name, password) {
    	orm.newPlayer('game_data', name, password);
    },    
    // Checks if password input matches password column associated with username
    authPassword: function(name, password) {
    	orm.authPassword('game_data', 'player_name', name, password);
    }
};

game.newPlayer("Woody", "Andy");