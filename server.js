//dependancies needed for server file
var express = require('express');
var flash = require('connect-flash');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var connection = require('./config/connection.js');
var path = require('path');
var passport = require('passport');
var session = require('express-session');

//sets express calls for use
var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public/assets'));

//flash is used to show a message on an incorrect login
app.use(flash());

//passport middleware methods
app.use(passport.initialize());
app.use(passport.session());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({secret: 'ssshhhhh', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//gets and uses game specific orms
require('./controllers/game_controller.js')(app);


var port = process.env.PORT || 3000;
//confirms active server in node
app.listen(port, function() {
    console.log("Listening on PORT " + port);
});