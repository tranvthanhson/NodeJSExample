var express = require("express");
var app = express();
var mysql = require('../config/mysql.js');
var userController = require('../Controllers/UserController.js');
var clotherController = require('../Controllers/ClotherController.js');
var bodyParser = require('body-parser');
app.use(bodyParser());

const connection = require('../config/connection');
const User = require('../Models/User');

app.use('/users', require('../Router/users'));


// app.get('/users', function (req, res) {
//     userController.all(function (error, results) {
//         if (error) {
//             res.json({
//                 status: 'fail'
//             });
//         }
//         else {
//             res.json({
//                 status: 'success',
//                 data: results
//             });
//         }
//     });
// });


app.post('/user/insert', function (req, res) {
    var name = req.body.name;
    userController.insert(name, function (error, result) {
        if (error) {
            res.json({
                status: 'Insert fail'
            });
        }
        else {
            res.json({
                status: 'Insert success',
            });
        }
    });
});

app.post('/user/delete/all', function (req, res) {
    userController.deleteAll(function (error, results) {
        if (error) {
            res.json({
                status: 'Delete all fail'
            });
        }
        else {
            res.json({
                status: 'Delete all success',
            });
        }
    });
});

app.post('/user/delete/', function (req, res) {
    id = parseInt(req.body.id);
    clotherController.deleteByUserId(id, function (error, result) {

    });
    userController.deleteById(id, function (error, result) {
        if (error) {
            res.json({
                status: 'Delete fail'
            });
        }
        else {
            res.json({
                status: 'Delete success',
            });
        }
    });
});

app.get('/clothers', function (req, res) {
    clotherController.all(function (error, results) {
        if (error) {
            res.json({
                status: 'fail'
            });
        }
        else {
            res.json({
                status: 'success',
                data: results
            });
        }
    });
});

app.post('/clothers/insert', function (req, res) {
    var name = req.body.name;
    var size = parseInt(req.body.size);
    var color = req.body.color;
    var user_id = parseInt(req.body.user_id);
    clotherController.insert(name, size, color, user_id, function (error, results) {
        if (error) {
            res.json({
                status: 'fail',
                data: error
            });
        }
        else {
            res.json({
                status: 'success',
                data: results
            });
        }
    })
});

app.post('/clothers/delete', function (req, res) {
    var id = parseInt(req.body.id);
    clotherController.deleteById(id, function (error, results) {
        if (error) {
            res.json({
                status: 'fail',
                data: error
            });
        }
        else {
            res.json({
                status: 'success',
                data: results
            });
        }
    })
});

app.listen(process.env.PORT || 3000);
