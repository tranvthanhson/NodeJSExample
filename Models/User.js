const Sequelize = require('../config/connection');
const sequelize = require('sequelize');

const User = Sequelize.define('user', {
    firstName: {
        type: sequelize.STRING
    },
    lastName: {
        type: sequelize.STRING
    }
});

User.sync({force: false});

module.exports = User;
