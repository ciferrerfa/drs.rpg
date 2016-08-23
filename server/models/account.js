// file: ./server/models/account.js

var promise 		= require('bluebird');
var mongoose        = require('mongoose');
var model           = undefined;
 
var schema = new mongoose.Schema({
	userId: {type: String, trim: true, index: true, unique: true},
	password: {type: String},
	email: {type: String, trim: true},
	language: {type: mongoose.Schema.Types.ObjectId, ref: 'language'}, 
	roles: [{role: {type: mongoose.Schema.Types.ObjectId, ref: 'role'}}]
});

function getByUserId (userId) {
	return model.findOne({ userId: new RegExp('^' + userId + '$', 'i') });
}

exports = function(database) {
	model = database.model('account', schema);
	
	promise.promisifyAll(model);
	promise.promisifyAll(model.prototype);
};

exports.add = function(userId, password, email, language, roles) {
	return new promise(function (resolve, reject) {
		getByUserId(userId)
			.then(findOk)
			.catch(findError);
		
		function findOk (result) {
			if (result == null) {
				console.log('adding ' + userId);
				var newModel = new model({userId : userId, password: password, email: email, language: language, roles: roles });
				newModel.save()
					.then(saveOk)
					.catch(saveError);
			}
			else {
				resolve({message: 'Exists: ' + userId});
			}
		}
		
		function saveOk (result) {
			resolve(result);
		}
		
		function saveError (err) {
			reject(new Error('Save error: ' + err));
		}
		
		function findError (err) {
			reject(new Error('Find error: ' + err));
		}
	});
};

schema.statics.setLanguage = function (userId, language) {
	return new promise(function (resolve, reject) {
		getByUserId(userId)
			.then(findOk)
			.catch(findError);
		
		function findOk (account) {
			if (account != null) {
				account.language = language;
				
				account.save()
					.then(saveOk)
					.catch(saveError);
			}
			else {
				reject(new Error('User: ' + userId + ' not exists'));
			}
		}
		
		function saveOk (result) {
			resolve(result);
		}
		
		function saveError (err) {
			reject(new Error('Save error: ' + err));
		}
		
		function findError (err) {
			reject(new Error('Find error: ' + err));
		}
	});
};