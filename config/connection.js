var mysql = require('mysql');

// var connection = mysql.createConnection(process.env.JAWSDB_URL);

// connection.connect(function(err){
// 	if (err) throw err;
// 	console.log('connected as id '+connection.threadID);
// });

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gtfo_db'
});

function connect() {
connection.connect(function(err) {
   if (err) {
       console.error('error connecting: ' + err.stack);
       return;
   }
   console.log('connected as id ' + connection.threadId);
});
}

module.exports.connect = connect