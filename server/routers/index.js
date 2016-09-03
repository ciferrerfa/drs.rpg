// file: ./server/routers/index.js

var express = require('express');
var path    = require('path');

var router  = express.Router();

var controller = require(path.join(global.__root + '/server/controllers/index.js'));

router
    //.use(require(path.join(global.__root + '/server/middlewares/log.js')).logRequest)
    .get('/', function(req, res) { controller.getIndexPage(req, res); })
    .get('/index.html', function(req, res) { controller.getIndexPage(req, res); })
    .get('/home', function(req, res) { controller.getIndexPage(req, res); })
    .get('/login', function(req, res) { controller.getIndexPage(req, res); })
    .get('/singup', function(req, res) { controller.getIndexPage(req, res); })
    .get('/profile', function(req, res) { controller.getIndexPage(req, res); });

module.exports.router = router;