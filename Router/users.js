var Route = require('express').Router();
var UserController = require('../Controllers/UserController');

Route.get('/users', UserController.all);

module.exports = Router;
