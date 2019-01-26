const monk = require('monk');
const connectionURL = process.env.MONGODB_URI || 'localhost/stutern-dev';
const db = monk(connectionURL);

module.exports = db;