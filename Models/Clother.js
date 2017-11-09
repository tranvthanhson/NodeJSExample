const Sequelize = require('../config/connection');
const sequelize = require('sequelize');

const Clother = Sequelize.define('clother', {
    clother_id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize.STRING
    },
    size: {
        type: sequelize.STRING
    },
    color: {
        type: sequelize.STRING
    },
    user_id: {
        type: sequelize.INTEGER
    },

});

Clother.sync({force: false});

module.exports = Clother;
