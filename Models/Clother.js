var db = require('../config/mysql.js');

var table = 'clothings';

var clothers = {
  all:function(callback) {
    return db.query("SELECT * FROM `" + table + "`", callback);
  },
  insert:function(name, size, color, user_id, callback) {
    return db.query("INSERT INTO `" + table + "` (`name`, `size`, `color`, `user_id`) "+
        "VALUES (\'" + name + "\', " + size+ ", \'"+color+"\', " + user_id + ")", callback);
  },
  deleteById:function(id, callback) {
    return db.query("DELETE FROM `" + table + "` WHERE `clothing_id` = " + id, callback);
  },
  deleteByUserId:function(id, callback) {
    return db.query("DELETE FROM `" + table + "` WHERE `user_id` = " + id, callback);
  },
  deleteAll: function(callback) {
    return db.query("DELETE FROM `" + table + "`", callback);
  }
};

module.exports=clothers;
