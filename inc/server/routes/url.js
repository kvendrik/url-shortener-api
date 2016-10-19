let GetUrlController = require('../controllers/GetUrlController');

module.exports = function(app){
	app.get('/:token', (req, res) => new GetUrlController(req, res));
};