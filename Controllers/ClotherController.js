var ClotherModel = require('../Models/Clother');
var APIResponse = require('../Helpers/APIResponse');

var exports = {};

// exports.all = function () {
//     return clotherModel.all(callback);
// };

var clotherController = {
  all: function(callback) {
    return clotherModel.all(callback);
  },
  insert: function(name, size, color, user_id, callback) {
    return clotherModel.insert(name, size, color, user_id, callback);
  },
  deleteById: function(id, callback) {
    return clotherModel.deleteById(id, callback);
  },
  deleteByUserId: function(id, callback) {
    return clotherModel.deleteByUserId(id, callback);
  },
  deleteAll: function(callback) {
    return clotherModel.deleteAll(callback);
  }
};

module.exports = clotherController;
