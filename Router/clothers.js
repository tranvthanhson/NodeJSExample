var Route = require('express').Router();
var ClotherController = require('../Controllers/ClotherController');

Route.get('/', ClotherController.all);
Route.get('/:id', ClotherController.findById);
Route.post('/', ClotherController.create);
Route.delete('/:id', ClotherController.delete);

module.exports = Route;
