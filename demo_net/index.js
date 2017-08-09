const net = require('net');

const server = net.createServer((sock)=>{
	console.log('client connected');

	sock.on('data', (data)=>{
		console.log('client data');
		console.log(data.toString());
	});

	sock.on('end', ()=>{
		sock.destroy();
		console.log('client end');
	});

	sock.on('close', ()=>{
		sock.destroy();
		console.log('client close');
	});

	sock.on('error',(error)=>{
		console.log('client error');
		console.log(error);
	});
});

server.on('error',(error)=>{
	console.log('server error');
	throw error;
});

server.listen(8880,()=>{
	console.log('server bound');
});