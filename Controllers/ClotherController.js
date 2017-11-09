var ClotherModel = require('../Models/Clother');
var APIResponse = require('../Helpers/APIResponse');

var exports = {};

exports.all = function (req, res, next) {
    ClotherModel.findAll().then(clothers => res.json(
        APIResponse.success(clothers, clothers.length)
    ));
};

exports.findById = function (req, res, next) {
    var clother_id = parseInt(req.params.id);
    ClotherModel.findById(clother_id).then(clother => res.json(
        APIResponse.success(clother)
    ));
}

exports.create = function (req, res, next) {
    var clother = {
        name: req.body.name,
        size: req.body.size,
        color: req.body.color,
        user_id: parseInt(req.body.id)
    }
    ClotherModel.create(clother).then(
        res.json(APIResponse.success(clother))
    );
}

exports.delete = function (req, res, next) {
    var clother_id = parseInt(req.body.id);
    ClotherModel.destroy({
        where: {
          clother_id: clother_id
        }
    }).then(
       res.json(APIResponse.success(clother_id))
    );
}

module.exports = exports;
