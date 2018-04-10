process.on('message', function(data){
	console.log('Son Listen：', data);
});
process.send({hello:'main'});