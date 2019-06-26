const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose');

var mysql = require('mysql');
var db = require('./DB');

const app = express();
app.use(bodyParser.json());
app.use(cors());
let port = process.env.PORT || 4000;

const server = app.listen(function(){
  console.log('Listening on port ' + port);
});
