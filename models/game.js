var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.all('burgers', function(res){
			cb(res)
		});
	},
	create: function(name,cb) {
		orm.create('burgers', ['burger_name', 'devoured'], [name, false], cb);
	},
	update: function(id, cb) {
		var condition = 'id=' + id;
		orm.update('burgers', {devoured : true}, condition, cb);
	}
};

var game = {
    // updateItem: function(tableInput, item, bool, coltoSearch, nameInput) {
	   //  // var s = 'UPDATE ' + tableInput + "SET itemOne=true WHERE player_name = '" + player_name + "';";
	   //  var s = 'UPDATE ' + tableInput + ' SET ' + item + ' = ' + bool + ' WHERE ' + coltoSearch + ' = ?';
	   //  connection.query(s, [nameInput], function(err, result) {
	   //      if (err) throw err;
	   //      // cb(result);
	   //  });
    // },
    updateItem: function(item, bool, name) {
    	orm.updateItem('game_data', item, bool, 'player_name', name);
    },
    // Will check database if player name exists
    // checkSavedPlayer: function(tableInput, coltoSearch, nameInput, passwordInput) {
    //     var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + coltoSearch + ' = ?';
    //     connection.query(queryString, [nameInput], function(err, result){
    //         // If no player is found, a new game will be started and new player will be added to the database
    //         if(err) throw err;
    //         else if(result == ''){
    //             console.log("No saved player found");
    //             console.log("Creating a new profile...");
    //             // Calls newPlayer function and adds player to database
    //             orm.newPlayer();
    //         }
    //         else if(result){
    //             console.log('Saved username exists.  Does your password match?');
    //             orm.authPassword(tableInput, coltoSearch, nameInput, passwordInput);

    //         }
    //     }); 
    // },
    checkSavedPlayer: function(name, password){
    	orm.checkSavedPlayer('game_data', 'player_name', name, password);
    },
    // Adds new player into game database
    // newPlayer: function(tableInput, nameInput, passwordInput) {
    //     var queryString = 'INSERT INTO ' + tableInput + ' SET ?';
    //     connection.query(queryString, {player_name: nameInput, password: passwordInput}, function(err, result){
    //         console.log('new player result: ' + result);
    //     });
    // },
    newPlayer: function(name, password) {
    	orm.newPlayer('game_data', name, password);
    },    
    // Checks if password input matches password column associated with username
    // authPassword: function(tableInput, coltoSearch, nameInput, passwordInput) {
    //     var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + coltoSearch + ' = ?';
    //     connection.query(queryString, [nameInput], function(err, result){
    //         if (err) throw err;
    //         else {
    //             console.log(result);
    //             if(result[0].password == passwordInput){
    //                 console.log('Password matches.')
    //                 console.log('Logging in...');
    //             }
    //             else{
    //                 console.log('Incorrect password');
    //             }
    //         }
    //     });
    // }
    authPassword: function(name, password) {
    	orm.authPassword('game_data', 'player_name', name, password);
    }
};

module.exports = game;