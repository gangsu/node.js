const net = require('net');
const client = net.connect({port:8880}, ()=>{
	console.log('connected to server!');
	client.write('hello\r\n');
});

client.on('data',(data)=>{
	console.log('data to server!');
	client.write('world\r\n');
	console.log(data.toString());
	client.end();
});

client.on('error',(error)=>{
	console.log('error from server!');
	console.log(error);
	client.end();
});

client.on('close',()=>{
	console.log('close to server!');
	client.end();
});

client.on('end',()=>{
	console.log('disconnected from server');
});