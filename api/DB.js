var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'crewAdmin',
  password: 'crew'
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


conn.end();
