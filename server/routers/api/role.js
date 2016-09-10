// file: ./server/routers/api/role.js

var express = require('express');
var path    = require('path');
var authentication  = require(path.join(global.__root + '/server/middlewares/authentication.js'));

var router  = express.Router();

var controller = require(path.join(global.__root + '/server/controllers/role.js'));

router
    //.use(require(path.join(global.__root + '/server/middlewares/log.js')).logRequest)
    .get('/', authentication.ensureAuthenticated, function(req, res) { controller.getAll(req, res); })
    .get('/:name', authentication.ensureAuthenticated, function(req, res) { controller.getByName(req, res); });
    
module.exports.router = router;