let mongoose = require('mongoose'),
	express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

let logger = require('./logger'),
	routes = require('./routes');

let middleware = {
	init: function(){
		app.use(this._allowCORS);
		app.use(bodyParser.json());
	},

	_allowCORS: function(req, res, next){
	    res.header('Access-Control-Allow-Origin', 'example.com');
	    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	    res.header('Access-Control-Allow-Headers', 'Content-Type');
	    next();
	}
};

module.exports = {

	start: function(options){
		options = options || {};
		let port = options.port || 3000;

		middleware.init();
		mongoose.connect(options.mongoUri);
		
		routes(app);

		app.listen(port);
		logger.log('Running on *:'+port);
	}

};