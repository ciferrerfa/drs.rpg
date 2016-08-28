// file: ./server/middlewares/log.js

module.exports.logRequest = function(req, res, next) {
    
    console.log(req.method, req.url);
    next();
}