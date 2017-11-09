var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());
var mysql = require('../config/mysql.js');

// Router
app.use('/users', require('../Router/users'));
app.use('/clothers', require('../Router/clothers'));

app.listen(process.env.PORT || 3000);
