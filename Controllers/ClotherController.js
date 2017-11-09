var ClotherModel = require('../Models/Clother');
var UserModel = require('../Models/User');
var APIResponse = require('../Helpers/APIResponse');

var exports = {};

exports.all = function (req, res, next) {
    ClotherModel.findAll().then(clothers => res.json(
        APIResponse.success(clothers, clothers.length)
    ));
};

exports.findById = function (req, res, next) {
    var clother_id = parseInt(req.params.id);
    ClotherModel.findById(clother_id)
        .then(clother => {
            console.log(clother);
        })
        .then(clother => {
            if (clother) {
                res.json(APIResponse.success(clother))
            } else {
                res.status(404).json(APIResponse.fail(404, 'Not found clother'))
            }
            return clother;
        })
    //
}

exports.create = function (req, res, next) {
    var clother = {
        name: req.body.name,
        size: req.body.size,
        color: req.body.color,
        user_id: parseInt(req.body.id)
    }

    UserModel.findById(clother.user_id).then(user => {
        if(user){
            ClotherModel.create(clother).then(
                res.json(APIResponse.success(clother))
            );
        }
        else {
            res.json(APIResponse.fail(404, 'Not have user, cannot create the row'))
        }
    });
}

exports.delete = function (req, res, next) {
    var clother_id = parseInt(req.params.id);
    ClotherModel.destroy({
        where: {
          clother_id: clother_id
        }
    }).then(
       res.json(APIResponse.success(clother_id))
    );
}

exports.update = function (req, res, next) {
    var clother_id = parseInt(req.params.id);
    ClotherModel.findById(clother_id).then(clother => {
        if(clother){
            // console.log(req.body.user_id);
            // return;
            var clother = {
                name: req.body.name,
                size: req.body.size,
                color: req.body.color,
                user_id: parseInt(req.body.user_id)
            };
            UserModel.findById(clother.user_id).then(user => {
                if(user){
                    ClotherModel.update(clother, {
                        where: {
                            user_id: clother.user_id
                        }
                    }).then(
                        res.json(APIResponse.success(clother))
                    );
                } else {
                    res.json(APIResponse.fail(404, 'Not have user to add clother'))
                }
            });
        } else {
            res.json(APIResponse.fail(404, 'Not found clother'))
        }
    });


}

module.exports = exports;
