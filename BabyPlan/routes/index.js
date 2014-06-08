
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.redirect('/index');
	});
	app.get('/index', function(req, res) { 
		res.render('index', { 
			title : 'BabyPlan',
		});
	});
		app.get('/home', function(req, res) { 
		res.render('home', { 
			title : 'BabyPlan',
		});
	});
	
}