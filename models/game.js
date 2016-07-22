var orm = require('../config/orm.js');

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

module.exports = game;