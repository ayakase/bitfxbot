const Sequelize = require('sequelize');
const sequelize = new Sequelize('statistic', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
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
sequelize.sync()
    .then(() => {
        console.log('Database and tables created!');
    })
    .catch((error) => {
        console.error('Error creating database and tables:', error);
    });
