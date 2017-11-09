const Sequelize = require('../config/connection');
const sequelize = require('sequelize');

const User = Sequelize.define('user', {
    user_id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: sequelize.STRING
    },
    lastName: {
        type: sequelize.STRING
    }
});

User.sync({force: false});

module.exports = User;


// // var db = require('../config/mysql.js');
// const connection = require('../config/connection');

// var table = 'users';

// var users = {
//   all:function(callback) {
//     // return db.query("SELECT * FROM `" + table + "`", callback);
//     return connection.
//   },
//   insert:function(name, callback) {
//     return db.query("INSERT INTO `" + table + "` (`name`) VALUES (\'" + name + "\')", callback);
//   },
//   deleteById:function(id, callback) {
//     return db.query("DELETE FROM `" + table + "` WHERE `user_id` = " + id, callback);
//   },
//   deleteAll: function(callback) {
//     return db.query("DELETE FROM `" + table + "`", callback);
//   }
// };

// module.exports=users;
