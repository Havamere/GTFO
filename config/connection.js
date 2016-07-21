var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'gtfo_db'
});

connection.connect(function(err){
	if (err) throw err;
	console.log('connected as id ' + connection.threadId);
});

// var connection = mysql.createConnection({
//     host: 'gtfo.website',
//     user: 'gtfo_project',
//     password: 'UCFb00tc@mp',
//     database: 'gtfo_db'
// });

// connection.connect(function(err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });

module.exports = connection;