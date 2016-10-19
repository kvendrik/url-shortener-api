let logger = require('../logger'),
	UrlModel = require('../models/Url');

var GetUrlController = function(req, res){
	let token = req.params.token;

	UrlModel.findOne({
		token: token
	}, function(err, result){
		if(err) return logger.error(err);
		
		if(result){
			res.redirect(result.originalUrl);
			logger.log('Get URL', 'Found', token+' > '+result.originalUrl);
		} else {
			res.send('404');
			logger.log('Get URL', 'Not Found', token);
		}
	});
};

module.exports = GetUrlController;