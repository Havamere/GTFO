var connection = require('../config/connection.js');

var orm = {
   
    itemChoice: function(tableInput, colName, player_name, cb) {
        return new Promise(function(resolve, reject){
            var s = 'UPDATE ' + tableInput + "SET "+ colName +"=true WHERE player_name = '" + player_name + "';";
            connection.query(s, function(err, result) {
                if (err) throw err;
                cb(result);
            });
        });
    },
   
    addPlayer: function(tableInput, player_name, password, cb) {
        var s = "INSERT INTO " + tableInput + " (player_name, password) VALUES ('" +player_name+ "',false);";
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // Will check database if player name exists
    checkSavedPlayer: function(tableInput, coltoSearch, nameInput, passwordInput) {
        var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + coltoSearch + ' = ?';
        connection.query(queryString, [nameInput], function(err, result){
            // If no player is found, a new game will be started and new player will be added to the database
            if(err) throw err;
            else if(result == ''){
                console.log("No saved player found");
                console.log("Creating a new profile...");
                // Calls newPlayer function and adds player to database
                orm.newPlayer();
            }
            else if(result){
                console.log('Saved username exists.  Does your password match?');
                orm.authPassword(tableInput, coltoSearch, nameInput, passwordInput);

            }
        }); 
    },
    // Adds new player into game database
    newPlayer: function(tableInput, nameInput, passwordInput) {
        var queryString = 'INSERT INTO ' + tableInput + ' SET ?';
        connection.query(queryString, {player_name: nameInput, password: passwordInput}, function(err, result){
            console.log('new player result: ' + result);
        });
    },
    // Checks if password input matches password column associated with username
    authPassword: function(tableInput, coltoSearch, nameInput, passwordInput) {
        var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + coltoSearch + ' = ?';
        connection.query(queryString, [nameInput], function(err, result){
            if (err) throw err;
            else {
                console.log(result);
                if(result[0].password == passwordInput){
                    console.log('Password matches.')
                    console.log('Logging in...');
                }
                else{
                    console.log('Incorrect password');
                }
            }
        });
    }    
};

module.exports = orm;