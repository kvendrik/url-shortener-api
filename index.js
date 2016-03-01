var server = require('./inc/server');

server.start({
	port: process.env.PORT,
	mongoUri: process.env.POD_MONGODB || 'mongodb://localhost/url-shortner'
});