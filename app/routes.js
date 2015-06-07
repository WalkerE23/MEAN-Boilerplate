var Person = require('./models/person');

module.exports = function(app){
	//server routes-------------------------
	//handle api calls
	//auth routes

	app.get('/api/person', function(req,res){
		Person.find(function(err, person){
			if(err){
				res.send(err);
			}
			res.json(person);
		});

	});

	//route to hadle creating (app.post)
	//route to handle deleting (app.delete)
	//----------------------------

	//frontend routes -----------------------------
	//handle all angular requests
	app.get('*', function(req, res){
		res.sendfile('./public/views/index.html');
	});


	//----------------------------



};