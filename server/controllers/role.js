// file: ./server/controllers/role.js

var path		= require('path');

var connection	= require(path.join(global.__root + '/server/middlewares/connection.js'));

exports.getAll = function(req, res) {
	
	connection.open()
		.then(connectionOpen)
		.catch(connectionError);
	
	function connectionOpen (database) {
		var model = require(path.join(global.__root + '/server/models/role.js'));
		
		model.initialize(database);
		
		model.getAll()
			.then(findOk)
			.catch(findError);
		
		function findOk (result) {
			res.json({type: true, data: result});
			database.close();
		}
		
		function findError (err) {
			console.log('Error find: ' + err);
			res.json({type: false, data: 'errorfind'});
			database.close();
		}
	}
	
	function connectionError (err) {
		console.log('Error database: ' + err);
		res.json({type: false, data: 'errordatabase'});
	}
	
};

exports.getByName = function(req, res) {
	
	connection.open()
		.then(connectionOpen)
		.catch(connectionError);
	
	function connectionOpen (database) {
		var model = require(path.join(global.__root + '/server/models/role.js'));
		
		model.initialize(database);
		
		model.getByName(req.params.name)
			.then(findOk)
			.catch(findError);
		
		function findOk (result) {
			res.json({type: true, data: result});
			database.close();
		}
		
		function findError (err) {
			console.log('Error find: ' + err);
			res.json({type: false, data: 'errorfind'});
			database.close();
		}
	}
	
	function connectionError (err) {
		console.log('Error database: ' + err);
		res.json({type: false, data: 'errordatabase'});
	}
	
};