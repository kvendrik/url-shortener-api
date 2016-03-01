let logger = require('../logger'),
	UrlModel = require('../models/Url');

var GetUrlController = function(req, res){
	let token = req.params.token;

	UrlModel.findOne({
		token: token
	}, function(err, result){
		if(err) return logger.error(err);
		
		if(result){
			res.json({
				success: true,
				data: {
					url: result.originalUrl,
					token: result.token
				}
			});
			logger.log('Get URL', 'Found', token+' > '+result.originalUrl);
		} else {
			res.json({
				success: false,
				message: 'URL not found'
			});
			logger.log('Get URL', 'Not Found', token);
		}
	});
};

module.exports = GetUrlController;