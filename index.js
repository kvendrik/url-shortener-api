var server = require('./inc/server');

server.start({
	port: process.env.PORT,
	mongoUri: process.env.MONGOLAB_URI || 'mongodb://localhost/url-shortner'
});