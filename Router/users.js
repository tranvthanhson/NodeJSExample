var Route = require('express').Router();
var UserController = require('../Controllers/UserController');

Route.get('/', UserController.all);
Route.get('/:id', UserController.findById);

module.exports = Route;
