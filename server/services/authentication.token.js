// file: ./server/services/authentication.token.js

var jwt     = require('jwt-simple');
var moment  = require('moment');

exports.createToken = function (account) {
  
  var payLoad = {
    sub: account.userId,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix()
  };
  
  return jwt.encode(payLoad, require(global.__root + '/server/configs/constants.js').TOKEN_SECRET);
};