const Sequelize = require('sequelize');
const sequelize = new Sequelize('statistic', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
const Plan = sequelize.define('plan', {
    question: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    number: {
        type: Sequelize.INTEGER(),
        allowNull: false
    },
});

module.exports = Plan;