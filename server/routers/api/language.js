// file: ./server/routers/api/language.js

var express = require('express');
var path    = require('path');
var authentication  = require(path.join(global.__root + '/server/middlewares/authentication.js'));

var router  = express.Router();

var controller = require(path.join(global.__root + '/server/controllers/language.js'));

router
    //.use(require(path.join(global.__root + '/server/middlewares/log.js')).logRequest)
    .get('/', function(req, res) { controller.getAll(req, res); })
    .get('/:code', function(req, res) { controller.getByCode(req, res); });
    
module.exports.router = router;