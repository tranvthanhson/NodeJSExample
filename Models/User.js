const Sequelize = require('../config/connection');
const sequelize = require('sequelize');

const User = Sequelize.define('user', {
    user_id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: sequelize.STRING
    },
    lastName: {
        type: sequelize.STRING
    }
});

User.sync({force: false});

module.exports = User;
