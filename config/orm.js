var connection = require('../config/connection.js');

var orm = {
   
    itemOne: function(tableInput, player_name, cb) {
        var s = 'UPDATE ' + tableInput + "SET itemOne=true WHERE player_name = '" + player_name + "';";
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
   
    addPlayer: function(tableInput, player_name, password, cb) {
        var s = "INSERT INTO " + tableInput + " (player_name, password) VALUES ('" +player_name+ "',false);";
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;