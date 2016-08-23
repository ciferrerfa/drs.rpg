// file: ./server/middlewares/connection.js

var promise		= require('bluebird');
var mongoose	= require('mongoose');
var path		= require('path');

var dbConfig	= require(path.join(global.__root + '/server/configs/database.js'));

exports.open = function () {
	return new promise(function (resolve, reject) {
		var database = mongoose.createConnection(dbConfig.url, dbConfig.options)
			.on('connecting', function () { console.log('DB connecting.'); })
			.on('connected', function () { console.log('DB connected.'); })
			.on('open', connectionOpen)
			.on('disconnecting', function () { console.log('DB disconnecting.'); })
			.on('disconnected', function () { console.log('DB disconnected.'); })
			.on('close', connectionClose)
			.on('error', connectionError);
		
		function connectionOpen () {
			console.log('DB open');
			mongoose.Promise = promise;
			resolve(database);
		}
		
		function connectionClose () {
			console.log('DB close');
			process.exit();
		}
		
		function connectionError (err) {
			reject(new Error('DB error: ' + err));
		}
    });
}