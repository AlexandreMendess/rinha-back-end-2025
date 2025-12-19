const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'alemendes',
    password: 'mysecret',
    database: 'payments_db'
})