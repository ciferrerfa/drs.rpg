// file: ./server/routers/index.js

var express = require('express');
var path    = require('path');

var router  = express.Router();

var controller = require(path.join(global.__root + '/server/controllers/index.js'));

controller.initialize();

router
    //.use(require(path.join(global.__root + '/app/middlewares/log.js')).logRequest)
    .get('/', function(req, res) { controller.getIndexPage(req, res); });

module.exports.router = router;