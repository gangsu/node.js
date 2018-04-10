var childProcess = require('child_process');

var child = childProcess.fork('son.js');

child.on('message', function(data){
	console.log('Main Listen：', data);
});
child.send({hello:'son'});