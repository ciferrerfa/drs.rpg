// file: ./app/middlewares/authentication.js

var jwt     = require('jwt-simple');
var moment  = require('moment');

exports.ensureAuthenticated = function(req, res, next) {
    
    // si no hi ha token
    if (!req.headers['x-security-token']) {
        return res
            .status(403)
            .send();
    }
    
    var token = req.headers['x-security-token'];
    var payload = jwt.decode(token, require(global.__root + '/server/configs/constants.js').TOKEN_SECRET);
    
    // si el token ha expirat
    if (payload.exp <= moment().unix()) {
        return res
            .status(401)
            .send();
    }
    
    req.params.userId = payload.sub;
    //console.log('autenticated ' + payload.sub);
    
    next();
};

/*

function ensureAuthenticated(req, res, next) {
  if (!req.header('Authorization')) {
    return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
  }
  var token = req.header('Authorization').split(' ')[1];

  var payload = null;
  try {
    payload = jwt.decode(token, config.TOKEN_SECRET);
  }
  catch (err) {
    return res.status(401).send({ message: err.message });
  }

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: 'Token has expired' });
  }
  req.user = payload.sub;
  next();
}
*/