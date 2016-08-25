// file: ./server/controllers/index.js

var promise = require('bluebird');
var path    = require('path');

exports.getIndexPage = function (req, res) {
	
	var fs = promise.promisifyAll(require('fs'));
	
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