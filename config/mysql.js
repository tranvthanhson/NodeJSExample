var mysql = require('mysql');

var exports = {};

exports.connect = function () {
  var connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'express_db'
  });
  connection.connect();
  return connection;
};

exports.query = function (query, callback) {
  var connection = exports.connect();
  console.log(query);
  var debug = connection.query(query, function (error, results, fields) {
    callback(error, results, fields);
  });
  connection.end();
};

module.exports = exports;
