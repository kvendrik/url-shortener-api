let fs = require('fs');

module.exports = function(app){
	fs.readdirSync(__dirname).forEach(function(filename){
		if(filename !== 'index.js' && /\.js$/.test(filename)){
			require('./'+filename)(app);
		}
	});

	fs.readdirSync(__dirname+'/api').forEach(function(filename){
		if(filename !== 'index.js' && /\.js$/.test(filename)){
			require('./api/'+filename)(app);
		}
	});
};