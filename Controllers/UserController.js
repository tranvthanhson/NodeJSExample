var userModel = require('../Models/users.js');

var userController = {
  all: function(callback) {
    return userModel.all(callback);
  },
  insert: function(name, size, color, user_id, callback) {
    return userModel.insert(name, size, color, user_id, callback);
  },
  deleteById: function(id, callback) {
    return userModel.deleteById(id, callback);
  },
  deleteAll: function(callback) {
    return userModel.deleteAll(callback);
  }
};

module.exports = userController;
