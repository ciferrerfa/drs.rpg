// file: ./server/controllers/authentication.js

var path		= require('path');
var promise 	= require('bluebird');
var connection	= require(path.join(global.__root + '/server/middlewares/connection.js'));
var service		= require(path.join(global.__root + '/server/services/authentication.token.js'));

exports.login = function(req, res) {
	
	connection.open()
		.then(connectionOpen)
		.catch(connectionError);
	
	function connectionOpen (database) {
		var account = require(path.join(global.__root + '/server/models/account.js'));
		var role = require(path.join(global.__root + '/server/models/role.js'));
		var language = require(path.join(global.__root + '/server/models/language.js'));
		
		account.initialize(database);
		role.initialize(database);
		language.initialize(database);
		
		login(account, req.body.userId, req.body.password)
			.then(loginOk)
			.catch(loginError);
			
		function login (model, userId, password) {
			return  new promise(function (resolve, reject) {
				model.login(userId, password)
					.then(modelLoginOk)
					.catch(modelLoginError);
				
				function modelLoginOk (result) {
					resolve(result);
				}
				
				function modelLoginError (err) {
					reject(new Error('Add error: ' + err));
				}
			});
		}
			
		function loginOk (account) {
			if (account == null) {
				res.json({auth: false, data: 'server.loginerror', token: null});
			}
			else {
				res.json({ auth: true, data: account, token: service.createToken(account) });
			}
			database.close();
		}
		
		function loginError (err) {
			console.log('Error login: ' + err);
			res.json({auth: false, data: 'server.loginerror', token: null});
			database.close();
		}
	}
	
	function connectionError (err) {
		console.log('Error database: ' + err);
		res.json({auth: false, data: 'server.errordatabase', token: null});
	}
	
};

exports.logout = function (req, res) {
	res.json({auth: true, data: '', token: null});
};

exports.singup = function(req, res) {
	
	connection.open()
		.then(connectionOpen)
		.catch(connectionError);
	
	function connectionOpen (database) {
		var languageModel	= require(path.join(global.__root + '/server/models/language.js'));
		var roleModel		= require(path.join(global.__root + '/server/models/role.js'));
		
		languageModel.initialize(database);
		roleModel.initialize(database);
		var promises		= [];
		
		promises.push(languageModel.getByCode(global.__language));
		promises.push(roleModel.getByName('master'));
		promises.push(roleModel.getByName('player'));
		
		promise.all(promises)
			.then(getOk)
			.catch(getError);
		
		function getOk (result) {
			var model	= require(path.join(global.__root + '/server/models/account.js'));
			var roles	= [];
			
			model.initialize(database);
			
			roles.push(result[1]);
			roles.push(result[2]);
			
			model.add(req.body.userId, req.body.password, req.body.email, result[0], result[1], roles)
				.then(addOk)
				.catch(addError);
			
			function addOk (account) {
				if (account.userId != undefined) {
					res.json({ auth: true, data: account, token: service.createToken(account) });
				}
				else {
					res.json({auth: false, data: 'server.singupexists', token: null});
				}
				database.close();
			}
			
			function addError (err) {
				console.log('Error singup.add: ' + err);
				res.json({auth: false, data: 'server.singuperror', token: null});
				database.close();
			}
		}
		
		function getError (err) {
			console.log('Error singup.get: ' + err);
			res.json({auth: false, data: 'server.singuperror', token: null});
			database.close();
		}
	}
	
	function connectionError (err) {
		console.log('Error database: ' + err);
		res.json({auth: false, data: 'server.errordatabase', token: null});
	}
	
};