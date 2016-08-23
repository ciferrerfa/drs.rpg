// file: ./server/configs/database.js

module.exports = {
    url : 'mongodb://localhost:27017/rpg',
    options: { promiseLibrary: require('bluebird') }
};