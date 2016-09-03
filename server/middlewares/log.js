// file: ./server/middlewares/log.js

module.exports.logRequest = function(req, res, next) {
    
    if (req.url.indexOf('/modules/') < 1) {
        if (req.url.indexOf('/js/') < 1) {
            console.log(req.method, req.url);
        }
    }
    next();
};