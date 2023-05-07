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
const Question = sequelize.define('question', {
    question: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    number: {
        type: Sequelize.INTEGER(),
        allowNull: false
    },
});
module.exports = Question;
