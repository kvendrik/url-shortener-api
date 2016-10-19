module.exports = function(app){

	app.get('/api', function(req, res){
		let routePaths = {};
		app._router.stack.forEach(function(details){
			let route = details.route;
			if(route && route.path !== '/'){
				routePaths[route.path] = route.methods;
			}
		});
		res.json(routePaths);
	});

};