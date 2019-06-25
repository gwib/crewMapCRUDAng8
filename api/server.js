const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  expressValidator = require('express-validator'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  session = require('express-session');

const hbs = require('express-hbs');
const path = require('path');


const app = express();
let port = process.env.PORT || 4000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(expressValidator());
app.use(cookieParser());
app.use(session({secret: 'krunal', saveUninitialized: false, resave: false}));



app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')

const server = app.listen(function(){
  console.log('Listening on port ' + port);
});
