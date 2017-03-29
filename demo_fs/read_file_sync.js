// 同步读取文件
var fs = require('fs');

var data = fs.readFileSync('test.txt','utf-8');
console.log(data);
