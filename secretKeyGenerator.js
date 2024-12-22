const crypto = require('crypto');

const generateSecretKey = () => crypto.randomBytes(64).toString('hex');

const key = generateSecretKey()

console.log(key);
module.exports = generateSecretKey;
