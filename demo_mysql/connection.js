var mysql = require('mysql');

//创建连接
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	port : '3306'
});

connection.connect(function(err){
	if(err){
		console.log('[query] - ' + err);
		return;
	}
	console.log('[connection connect] - succeed!');
});

connection.query('select 1+2 as solution', function(err, rows, fields){
	if(err){
		console.log('[query] - ' + err);
		return;
	}
	console.log('The solution is:', rows[0].solution);
});

connection.end(function(err){
	if(err){
		console.log('[query] - ' + err);
		return;
	}
	console.log('[connection end] - succeed!');
});