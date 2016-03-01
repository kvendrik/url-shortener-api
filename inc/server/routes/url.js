let GetUrlController = require('../controllers/GetUrlController'),
	SaveUrlController = require('../controllers/SaveUrlController');

module.exports = function(app){
	app.post('/url', (req, res) => new SaveUrlController(req, res));
	app.get('/url/:token', (req, res) => new GetUrlController(req, res));
};