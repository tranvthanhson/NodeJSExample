var db = require('../config/mysql.js');

var table = 'users';

// Sua lai dung sequelize

var users = {
  all:function(callback) {
    return db.query("SELECT * FROM `" + table + "`", callback);
  },
  insert:function(name, callback) {
    return db.query("INSERT INTO `" + table + "` (`name`) VALUES (\'" + name + "\')", callback);
  },
  deleteById:function(id, callback) {
    return db.query("DELETE FROM `" + table + "` WHERE `user_id` = " + id, callback);
  },
  deleteAll: function(callback) {
    return db.query("DELETE FROM `" + table + "`", callback);
  }
};

module.exports=users;
