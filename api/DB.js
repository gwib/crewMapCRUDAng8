const Sequelize = require('sequelize');

const sequelize = new Sequelize('crewrestapi', 'crewAdmin', 'crew',
  {host: 'localhost',
  dialect: 'mysql'
  });

sequelize
  .authenticate()
  .then(()=> {
    console.log('Connection has been established')
  })
  .catch(err => {
    console.error('Unable to connect to database:', err);
  });

/*
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
*/
