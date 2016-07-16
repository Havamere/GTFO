var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'gtfo_db'
});

connection.connect(function(err){
	if (err) throw err;
	console.log('connected as id '+connection.threadID);
});

module.exports = connection;