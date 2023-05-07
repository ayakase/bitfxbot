const mysql = require('mysql2');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'statistic',
});
con.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL database:', error);
        return;
    }
    console.log('Connected to MySQL database!');
});
module.exports = con