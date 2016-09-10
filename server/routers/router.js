// file: ./server/routers/router.js

var path    = require('path');

module.exports = function(app) {
    
    //app.use(require(path.join(global.__root + '/server/middlewares/log.js')).logRequest);
    
    app.use(require(path.join(global.__root + '/server/middlewares/request.headers.js')).readHeaders);
    
    app.use('/', require(path.join(global.__root + '/server/routers/index.js')).router);
    app.use('/home', require(path.join(global.__root + '/server/routers/index.js')).router);
    app.use('/index.html', require(path.join(global.__root + '/server/routers/index.js')).router);
    
    app.use('/api/account', require(path.join(global.__root + '/server/routers/api/account.js')).router);
    app.use('/api/authentication', require(path.join(global.__root + '/server/routers/api/authentication.js')).router);
    app.use('/api/language', require(path.join(global.__root + '/server/routers/api/language.js')).router);
    app.use('/api/role', require(path.join(global.__root + '/server/routers/api/role.js')).router);
    
};