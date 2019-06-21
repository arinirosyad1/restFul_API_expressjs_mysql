const mysql = require ('mysql');

//get database connection
const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'restful_banking'
});

//connect to database
conn.connect(function(err) {
	if(err) throw err;
	console.log('MySql Connected');
});

module.exports = conn;