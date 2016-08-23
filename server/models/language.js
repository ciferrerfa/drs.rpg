// file: ./server/models/language.js

var promise		= require('bluebird');
var mongoose    = require('mongoose');

var model       = null;

var schema = new mongoose.Schema( { 
    code: { type : String, trim : true, index : true, unique: true },
    language: { type : String, trim : true }
});

exports.add = function(code, name) {
    console.log('adding ' + code + ', '+ name);
    
    var newModel = new model({ code : code, language: name });
    return newModel.saveAsync();
};

exports.createModel = function(database) {
    model = database.model('language', schema);
    
    promise.promisifyAll(model);
    promise.promisifyAll(model.prototype);
};