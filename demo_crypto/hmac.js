const crypto = require('crypto');

const hmac = crypto.createHmac('md5', 'secret-key!');

hmac.update('Hello World！');
hmac.update('Hello Node.js！');

console.log(hmac.digest('hex'));