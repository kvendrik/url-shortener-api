let logger = require('../../logger'),
	UrlModel = require('../../models/Url');

var SaveUrlController = function(req, res){
	let self = this,
		url = req.body.url;

	if(!url){
		res.json({
			success: false,
			message: 'The url property is required but was not found in the request body'
		});
		logger.log('API / Shorten URL', 'URL Property Missing');
		return;
	}

	this._checkExists(url, function(result){
		if(!result){
			self._saveUrl(url, function(url, token){
				res.status(201).json({
			  		success: true,
			  		message: 'The url was saved',
			  		data: {
			  			token: token,
			  			originalUrl: url
			  		}
			  	});
			  	logger.log('API / Shorten URL', 'Saved', url+' > '+token);
			});
		} else {
			let token = result.token;
			res.json({
				success: true,
				message: 'The URL already existed',
				data: {
					token: token,
					originalUrl: result.originalUrl
				}
			});
			logger.log('API / Shorten URL', 'Already Exists', url+' > '+token);
		}
	});
};

SaveUrlController.prototype._checkExists = function(url, callback){
	UrlModel.findOne({
		originalUrl: url
	}, function(err, result){
		if(err) return logger.error(err);
		callback(result);
	});
};

SaveUrlController.prototype._saveUrl = function(url, callback){
	let token = this._getRandomToken(4);
	this._saveUrlTokenPair(url, token, callback);
};

SaveUrlController.prototype._getRandomToken = function(length){
    if(typeof length !== 'number') length = 41;

    // Math.random returns number with length between 16 and 18 chars

    //if length below 16 do in one go
    if(length <= 16){
        return Math.random().toString(36).substring(2,length+2);
    }

    //else calculate how many iterations we need
    let iterations = Math.ceil(length / 16),
        outputStr = '';
    
    for(let i = 0; i < iterations; i++){
        outputStr += Math.random().toString(36).substring(2,18);
    }

    //correct length if it's too high
    if(outputStr.length > length) outputStr = outputStr.substring(0,length);

    return outputStr;
};

SaveUrlController.prototype._saveUrlTokenPair = function(url, token, callback){
	let self = this;
	
	let urlItem = new UrlModel({
		token: token,
		originalUrl: url
	});

	urlItem.save(function(err, urlItem) {
	  	if(err) return logger.error(err);
	  	callback(url, token);
	});

};

module.exports = SaveUrlController;
