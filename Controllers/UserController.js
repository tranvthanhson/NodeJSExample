var UserModel = require('../Models/User');
var ClotherModel = require('../Models/Clother');
var APIResponse = require('../Helpers/APIResponse');

var exports = {};

exports.all = function (req, res, next) {
    UserModel.findAll().then(users => res.json(
        APIResponse.success(users, users.length)
    ));
};

exports.findById = function (req, res, next) {
    var user_id = parseInt(req.params.id);
    UserModel.findById(user_id).then(user => res.json(
        APIResponse.success(user, user.length)
    ));
}

exports.create = function (req, res, next) {
    var user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    }
    UserModel.create(user).then(
       res.json(APIResponse.success(user, user.length))
    );
}

exports.delete = function (req, res, next) {
    var user_id = parseInt(req.body.id);
    UserModel.findById(user_id).then(user => {
        if(user) {
            ClotherModel.destroy({
                where: {
                    user_id: user_id
                }
            }).then(
                UserModel.destroy({
                    where: {
                      user_id: user_id
                    }
                }).then(
                    res.json(APIResponse.success(user_id))
                )
            );
        }
        else {
            res.json(APIResponse.fail(404, "Not found user"));
        }
    });

}

module.exports = exports;

