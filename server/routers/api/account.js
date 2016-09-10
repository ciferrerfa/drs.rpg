// file: ./server/routers/api/account.js

var express = require('express');
var path    = require('path');
var authentication  = require(path.join(global.__root + '/server/middlewares/authentication.js'));

var router  = express.Router();

var controller = require(path.join(global.__root + '/server/controllers/account.js'));

router
    //.use(require(path.join(global.__root + '/server/middlewares/log.js')).logRequest)
    .get('/', authentication.ensureAuthenticated, function(req, res) { controller.getAll(req, res); })
    .get('/:userId', authentication.ensureAuthenticated, function(req, res) { controller.getByUserId(req, res); })
    .put('/language', authentication.ensureAuthenticated, function(req, res) { controller.setLanguage(req, res); })
    .put('/role', authentication.ensureAuthenticated, function(req, res) { controller.setRole(req, res); });
    
module.exports.router = router;