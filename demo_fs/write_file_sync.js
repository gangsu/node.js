// 同步写文件
var fs = require('fs');

var data = 'hello node.js sync';
fs.writeFileSync('test.txt', data);