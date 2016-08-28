// file: ./server/server.js

// requires
var bodyParser      = require("body-parser");
var cors            = require('cors');
var express         = require('express');
var methodOverride  = require("method-override");
var mongoose        = require('mongoose');
var path            = require('path');
var favicon         = require('serve-favicon');

global.__root = path.resolve(__dirname.replace('server',''));

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(global.__root + '/client/resources/images/general/favicon.ico'));

// Middlewares & config
require(path.join(global.__root + '/server/routers/router.js'))(app);
app.use('/angular', express.static(global.__root + '/client/angular'));
app.use('/resources', express.static(global.__root + '/client/resources'));
app.set('port', process.env.PORT);

//inicialitzar servidor
app.listen(app.get('port'));
console.log("App inicialitzada al port: " + app.get('port'));