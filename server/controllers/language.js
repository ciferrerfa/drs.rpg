// file: ./server/controllers/language.js

var path        = require('path');

var connection	= require(path.join(global.__root + '/server/middlewares/connection.js'));

exports.getAll = function(req, res) {
	
	connection.open()
		.then(connectionOpen)
		.catch(connectionError);
	
	function connectionOpen (database) {
		var model = require(path.join(global.__root + '/server/models/language.js'));
		
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

exports.getByCode = function(req, res) {
	
	connection.open()
		.then(connectionOpen)
		.catch(connectionError);
	
	function connectionOpen (database) {
		var model = require(path.join(global.__root + '/server/models/language.js'));
		
		model.initialize(database);
		
		model.getByCode(req.params.code)
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