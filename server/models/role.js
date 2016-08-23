// file: ./app/models/role.js

var mongoose    = require('mongoose');
 
var schema = new mongoose.Schema( { 
    role: { type : String, trim : true, index : true }
});

schema.statics.findByRole = function(role, callback) {
    return this.findOne({ role: new RegExp(role, 'i') }, callback);
};

schema.statics.addRole = function(name, model) {
    
    this.findByRole(name, function(err, role) {
        if (err) {
            console.log('Error: getting role.');
        } 
        else {
            if (role == null) {
                var newRole = new model({ role : name });
                newRole.save();
            }
        }
    });
};

module.exports.model = mongoose.model('role', schema);

module.exports.initialize =  function() {
    
    this.model.addRole ('administrator', this.model);
    this.model.addRole ('master', this.model);
    this.model.addRole ('player', this.model);
    
};