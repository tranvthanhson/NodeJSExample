var userModel = require('../Models/users.js');

var userController = {
  all: function(req, res, next) {
    res.json(req.params);
  },
  show: function (req, res, next) {
    res.json(req.params);
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
