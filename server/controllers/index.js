// file: ./server/controllers/index.js

var promise = require('bluebird');
var fs      = undefined;
var path    = require('path');

exports.initialize = function () {
    
    fs = require('fs');
    
    promise.promisifyAll(fs);
    
};

exports.getIndexPage = function (req, res) {
    
    fs.readFileAsync(path.join(global.__root + '/client/views/index.html'))
        .then(readFileOk)
        .catch(readFileErr);
        
        function readFileOk (fileContent) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(fileContent);
            res.end();
        }
        
        function readFileErr (error) {
            res.writeHead(500, 'text/plain');
            res.write('Error intern del servidor.');
            console.log(error);
            res.end();
        }
    
};