// 读取二进制文件
var fs = require('fs');

fs.readFile('test.jpg',function(err, data){
	if ( err ) {
		console.log(err);
	} else {
		console.log(data.toString('utf-8'));
		console.log(data.length + ' bytes');
	}
});