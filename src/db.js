const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Thttp14?Yy',
  database: "blog",
});

module.exports = db;
