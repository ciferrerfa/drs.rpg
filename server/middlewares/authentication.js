// file: ./server/middlewares/request.headers.js

var moment  = require('moment');

exports.ensureAuthenticated = function(req, res, next) {
	
	// si no hi ha token
	if (global.__securityToken == undefined) {
		return res
			.status(403)
			.send();
	}
	
	// si el token ha expirat
	if (global.__payload.exp <= moment().unix()) {
        return res
            .status(401)
            .send();
    }
    
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