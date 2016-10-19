let GetUrlController = require('../../controllers/api/GetUrlController'),
	SaveUrlController = require('../../controllers/api/SaveUrlController');

module.exports = function(app){
	app.post('/api/url', (req, res) => new SaveUrlController(req, res));
	app.get('/api/url/:token', (req, res) => new GetUrlController(req, res));
};