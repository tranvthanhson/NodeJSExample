const Sequelize = require('sequelize');
const sequelize = new Sequelize('express_db', 'root', 'root', {
    host: 'db',
    dialect: 'mysql'
});

module.exports = sequelize;
