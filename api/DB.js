var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'crewAdmin',
  password: 'crew',
  database: 'crewrestapi'
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = conn;
