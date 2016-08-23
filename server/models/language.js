// file: ./server/models/language.js

var promise		= require('bluebird');
var mongoose    = require('mongoose');
var model       = undefined;

var schema = new mongoose.Schema( { 
    code: { type : String, trim : true, index : true, unique: true },
    name: { type : String, trim : true }
});

exports = function (database) {
    model = database.model('language', schema);
    
    promise.promisifyAll(model);
    promise.promisifyAll(model.prototype);
};

function getByCode (code) {
    return model.findOne({ code: new RegExp('^' + code + '$', 'i') });
}

exports.add = function (code, name) {
    return new promise(function (resolve, reject) {
        getByCode(code)
            .then(getOk)
            .catch(getError);
		
		function getOk (result) {
			if (result == null) {
			    var newModel = new model({ code : code, name: name });
			    newModel.save()
			        .then(addOk)
			        .catch(addError);
			}
			else {
			    resolve({message: 'Exists: ' + code});
			}
		}
		
		function addOk (result) {
		    resolve(result);
		}
		
		function addError (err) {
			reject(new Error('Add error: ' + err));
		}
		
		function getError (err) {
			reject(new Error('Get error: ' + err));
		}
    });
};

exports.getByCode = function (code) {
	return getByCode(code);
};