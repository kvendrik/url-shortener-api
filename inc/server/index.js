let mongoose = require('mongoose'),
	express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

let logger = require('./logger'),
	routes = require('./routes');

module.exports = {

	start: function(options){
		options = options || {};
		let port = options.port || 3000;

		app.use(bodyParser.json());
		mongoose.connect(options.mongoUri);
		
		routes(app);

		app.listen(port);
		logger.log('Running on *:'+port);
	}

};