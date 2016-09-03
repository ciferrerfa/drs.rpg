// file: ./server/middlewares/request.headers.js

var jwt     = require('jwt-simple');

exports.readHeaders = function(req, res, next) {
    
    if (req.headers['content-language'] != undefined) {
        global.__language = req.headers['content-language'];
    }
    else {
        global.__language = 'ca-es';
    }
    
    if (req.headers['x-security-token'] != undefined) {
        global.__securityToken = req.headers['x-security-token'];
        global.__payload = jwt.decode(global.__securityToken, require(global.__root + '/server/configs/constants.js').TOKEN_SECRET);
        global.__userId = global.__payload.sub;
    }
    else {
        global.__securityToken = undefined;
        global.__payload = undefined;
        global.__userId = undefined;
    }
    
    next();
};