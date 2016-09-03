// file: ./server/routers/authentication.js

var express = require('express');
var path    = require('path');

var router  = express.Router();

var controller = require(path.join(global.__root + '/server/controllers/authentication.js'));

router
    //.use(require(path.join(global.__root + '/server/middlewares/log.js')).logRequest)
    .post('/login', function(req, res) { controller.login(req, res); })
    .post('/logout', function(req, res) { controller.logout(req, res); })
    .post('/singup', function(req, res) { controller.singup(req, res); });
    
module.exports.router = router;