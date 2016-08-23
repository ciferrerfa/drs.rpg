// file: ./app/models/user.js

var mongoose    = require('mongoose');
var path        = require('path');
 
var schema = new mongoose.Schema( { 
    userId: { type : String, trim : true, index : true },
    password: String,
    email: { type : String, trim : true },
    language: { type: mongoose.Schema.Types.ObjectId, ref: 'language' }, 
    roles: [ { role: { type: mongoose.Schema.Types.ObjectId, ref: 'role' } } ]
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

schema.statics.findByUserId = function(userId, callback) {
    return this.findOne({ userId: new RegExp('^' + userId + '$', 'i') }, callback);
};

schema.statics.findByUserIdPassword = function(userId, password, callback) {
    return this.findOne({ userId: new RegExp('^' + userId + '$', 'i'), password: new RegExp('^' + password + '$', 'i') }, callback);
};

schema.statics.addUser = function(userId, password, email, model, callback) {
    
    this.findByUserId(userId, function(err, user) {
        if (err) {
            console.log('Error: getting user.');
        } 
        else {
            if (user == null) {
                var newUser = new model ({ userId : userId, password: password, email: email, language: null, roles: [] });
                newUser.save(callback);
            }
        }
    });
};

schema.statics.setLanguage = function (userId, newLanguage, callback) {
    
    this.findByUserId(userId, function(err, user) {
        if (err) {
            console.log('Error: getting user.');
        } 
        else {
            if ((user != null) && (newLanguage != null)) {
                user.language = newLanguage;
                user.save(callback);
            }
        }
    });
};

schema.statics.addRole = function(userId, newRole, callback) {
    
    this.findByUserId(userId, function(err, user) {
        if (err) {
            console.log('Error: getting user.');
        } 
        else {
            if ((user != null) && (newRole != null)) {
                var roleExists = false;
                for(var iRole in user.roles) {
                    if (!roleExists) { roleExists = (iRole._id == newRole._id); }
                }
                if (!roleExists) { 
                    user.roles.push( { role: newRole } );
                    user.save();
                }
            }
        }
    });
};

module.exports.model = mongoose.model('user', schema);

module.exports.initialize =  function() {
    var userModel = this.model;
    
    userModel.addUser ('admin', 'c0ntinuar', 'ciferrerfa@hotmail.com', userModel, function(err, user) {
        if (err) { 
            console.log('Error: addig user.'); 
        } 
        else {
            var languageModel = require(path.join(global.__root + '/app/models/language.js')).model;
            
            languageModel.findByCode('es-ca', function(err, language) {
                if (err) { console.log('Error: getting language.'); } 
                else { userModel.setLanguage (user.userId, language, null); }
            });
            
            var roleModel = require(path.join(global.__root + '/app/models/role.js')).model;
            
            roleModel.findByRole('administrator', function(err, role) {
                if (err) { console.log('Error: getting role.'); } 
                else { userModel.addRole (user.userId, role, null); }
            });
            
            roleModel.findByRole('master', function(err, role) {
                if (err) { console.log('Error: getting role.'); } 
                else { userModel.addRole (user.userId, role, null); }
            });
            
            roleModel.findByRole('player', function(err, role) {
                if (err) { console.log('Error: getting role.'); } 
                else { userModel.addRole (user.userId, role, null); }
            });
        }
    });
};