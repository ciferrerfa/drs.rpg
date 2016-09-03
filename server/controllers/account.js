// file: ./server/controllers/language.js

var path        = require('path');

var connection	= require(path.join(global.__root + '/server/middlewares/connection.js'));

exports.getAll = function(req, res) {
	
	connection.open()
		.then(connectionOpen)
		.catch(connectionError);
	
	function connectionOpen (database) {
		var model = require(path.join(global.__root + '/server/models/account.js'));
		
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

exports.getByUserId = function(req, res) {
	
	connection.open()
		.then(connectionOpen)
		.catch(connectionError);
	
	function connectionOpen (database) {
		var model = require(path.join(global.__root + '/server/models/account.js'));
		
		model.initialize(database);
		
		model.getByUserId(req.params.userId)
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

exports.setLanguage = function(req, res) {
	
	connection.open()
		.then(connectionOpen)
		.catch(connectionError);
	
	function connectionOpen (database) {
		var model = require(path.join(global.__root + '/server/models/account.js'));
		
		model.initialize(database);
		
		model.setLanguage(global.__userId, req.body.params)
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

exports.setRole = function(req, res) {
	
	connection.open()
		.then(connectionOpen)
		.catch(connectionError);
	
	function connectionOpen (database) {
		var model = require(path.join(global.__root + '/server/models/account.js'));
		
		model.initialize(database);
		
		model.setRole(global.__userId, req.body.params)
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