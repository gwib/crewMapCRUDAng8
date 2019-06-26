const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose');

var mysql = require('mysql');
var db = require('./DB');
//var routes = require('./routes/crews');

const crewRoute = require('./routes/crew.route');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/crews', crewRoute);
let port = process.env.PORT || 4000;

app.listen(port, function(){
  console.log('Listening on port ' + port);
});

//routes(app);

