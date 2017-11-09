var User = require('../Models/User');
var APIResponse = require('../Helpers/APIResponse');

var exports = {};

exports.all = function (req, res, next) {
    User.findAll().then(users => res.json(
        APIResponse.success(users)
    ));
};

exports.findById = function (req, res, next) {
    var id = parseInt(req.params.id);
    User.findById(id).then(user => res.json(
        APIResponse.success(user)
    ));
}

module.exports = exports;

