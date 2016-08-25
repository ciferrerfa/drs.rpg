// file: ./server/routers/api.js

var express = require('express');
var path    = require('path');
var authentication  = require(path.join(global.__root + '/server/middlewares/authentication.js'));

var router  = express.Router();

var languageController = require(path.join(global.__root + '/server/controllers/language.js'));
var roleController = require(path.join(global.__root + '/server/controllers/role.js'));
//var profileController = require(path.join(global.__root + '/server/controllers/profile.js'));

router
    //.use(require(path.join(global.__root + '/app/middlewares/log.js')).logRequest)
    .get('/language', function(req, res) { languageController.getAll(req, res); })
    .get('/language/:code', function(req, res) { languageController.getByCode(req, res); })
    .get('/role', authentication.ensureAuthenticated, function(req, res) { roleController.getAll(req, res); })
    .get('/role/:name', authentication.ensureAuthenticated, function(req, res) { roleController.getByName(req, res); });
    //.get('/profile', authentication.ensureAuthenticated, function(req, res) { profileController.getProfile(req, res); })
    //.put('/profile', authentication.ensureAuthenticated, function(req, res) { profileController.updateProfile(req, res); })
    //.put('/profile/:languageId', authentication.ensureAuthenticated, function(req, res) { profileController.updateLanguage(req, res); });
    
module.exports.router = router;