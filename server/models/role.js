// file: ./app/models/role.js

var promise		= require('bluebird');
var mongoose    = require('mongoose');
var model       = undefined;

var schema = new mongoose.Schema( { 
    name: { type : String, trim : true, index : true, unique: true }
});

function getByName (name) {
    return model.findOne({ name: new RegExp('^' + name + '$', 'i') });
}

exports.add = function (name) {
    return new promise(function (resolve, reject) {
        getByName(name)
            .then(findOk)
            .catch(findError);
		
		function findOk (result) {
			if (result == null) {
			    var newModel = new model({ name : name });
			    newModel.save()
			        .then(addOk)
			        .catch(addError);
			}
			else {
			    resolve({message: 'Exists: ' + name});
			}
		}
		
		function addOk (result) {
		    resolve(result);
		}
		
		function addError (err) {
			reject(new Error('Add error: ' + err));
		}
		
		function findError (err) {
			reject(new Error('Find error: ' + err));
		}
    });
    
};

exports.getAll = function () {
	return model.find().exec();
};

exports.getByName = function (name) {
	return getByName(name);
};

exports.initialize = function (database) {
    model = database.model('role', schema);
    
    promise.promisifyAll(model);
    promise.promisifyAll(model.prototype);
};