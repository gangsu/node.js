const crypto = require('crypto');

const hash = crypto.createHash('md5');

hash.update('Hello World！');
hash.update('Hello Node.js！');

console.log(hash.digest('hex'));