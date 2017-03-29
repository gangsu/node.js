// 异步写文件
var fs = require('fs');

var data = 'hello node.js';
fs.writeFile('test.txt', data, function(err){
	if ( err ) {
		console.log(err);
	} else {
		console.log('写入成功！');
	}
});