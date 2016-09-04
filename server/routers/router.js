// file: ./server/routers/router.js

var path    = require('path');

module.exports = function(app) {
    
    //app.use(require(path.join(global.__root + '/server/middlewares/log.js')).logRequest);
    
    app.use(require(path.join(global.__root + '/server/middlewares/request.headers.js')).readHeaders);
    
    app.use('/', require(path.join(global.__root + '/server/routers/index.js')).router);
    app.use('/home', require(path.join(global.__root + '/server/routers/index.js')).router);
    app.use('/index.html', require(path.join(global.__root + '/server/routers/index.js')).router);
    
    app.use('/authentication', require(path.join(global.__root + '/server/routers/authentication.js')).router);
    app.use('/api', require(path.join(global.__root + '/server/routers/api.js')).router);
    
};