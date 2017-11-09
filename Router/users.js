var Route = require('express').Router();
var UserController = require('../Controllers/UserController');

Route.get('/', UserController.all);
Route.get('/:id', UserController.findById);
Route.post('/', UserController.create);
Route.delete('/:id', UserController.delete);

module.exports = Route;
