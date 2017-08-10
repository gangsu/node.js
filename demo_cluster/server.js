const os = require('os');
const http = require('http');
const cluster = require('cluster');
const querystring = require('querystring');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	console.log(`主进程 ${process.pid} 正在运行`);

	// 衍生工作进程。
	for (let i=0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`工作进程 ${worker.process.pid} 已退出`);
	});
} else {
	// 工作进程可以共享任何 TCP 连接。
	// 在本例子中，共享的是一个 HTTP 服务器。
	http.createServer((req, res) => {
		//请求信息
		console.log(`请求IP：${req.socket.remoteAddress}`);
		console.log(`请求端口：${req.socket.remotePort}`);
		//请求数据		
		let body = [];
		req.on('data', (chunk) => {
			console.log(`请求数据：${chunk}`);
			body.push(chunk);
		}).on('end', () => {
			body = Buffer.concat(body).toString();
			body = querystring.parse(body);
			console.log(body);
			console.log('请求中已无数据。');
		});
		//响应
		res.writeHead(200);
		res.end('Hello Client!');
	}).listen(8000);

	console.log(`工作进程 ${process.pid} 已启动`);
}
