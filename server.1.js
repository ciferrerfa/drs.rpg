// file: ./server.js

// requires
var bodyParser      = require("body-parser");
var cors            = require('cors');
var express         = require('express');
var methodOverride  = require("method-override");
var mongoose        = require('mongoose');
var path            = require('path');
var favicon         = require('serve-favicon');

global.__root = path.resolve(__dirname);

//initialize mongodb database
mongoose.connect(require(path.join(global.__root + '/app/configs/database.js')).url);
console.log('DB Connecting');
mongoose.connection.on('error', function(err) { if (err) { console.log('Error: Could not connect to MongoDB.'); } });
mongoose.connection.once('open', function() {
    console.log('we are connected!');
    require(global.__root + '/app/models/role.js').initialize();
    require(global.__root + '/app/models/language.js').initialize();
    require(global.__root + '/app/models/user.js').initialize();
});

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(global.__root + '/client/resources/images/favicon.ico'));

// Middlewares & config
require(path.join(global.__root + '/app/routers/router.js'))(app);
app.use('/partials', express.static(global.__root + '/client/views/partials'));
app.use('/resources', express.static(global.__root + '/client/resources'));
app.set('port', process.env.PORT);

//inicialitzar servidor
app.listen(app.get('port'));
console.log("App inicialitzada al port: " + app.get('port'));


// Iniciamos el servidor y la base de datos
/*
mongoose.connect(require(path.join(global.__root + '/app/configs/database.js')).url, function(err, db) {  
    
    if (err) {
        console.log(err.message);
    }
    else
    {
        insertDocument(db, function() { console.log('insertDocument callback'); });
        app.listen(app.get('port'), function() {
            console.log('Express corriendo en http://localhost:3000');
            });
    }
});
*/