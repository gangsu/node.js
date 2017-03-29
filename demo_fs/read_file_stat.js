// 读取文件信息
var fs = require('fs');

fs.stat('test.txt',function(err, stat){
	if ( err ) {
		console.log(err);
	} else {
		// 是否为文件
		console.log('是否为文件：' + stat.isFile());
		// 是否为目录
		console.log('是否为文件：' + stat.isDirectory());
		if ( stat.isFile() ) {
			// 文件大小
			console.log('文件大小：' + stat.size);
			// 创建时间
			console.log('创建时间：' + stat.birthtime);
			// 修改时间
			console.log('修改时间：' + stat.mtime);
		}
	}
});