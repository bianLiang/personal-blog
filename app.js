var express = require("express");
const path = require('path');
var leavingMessage = require("./routes/leaving-message.js");
var article = require("./routes/article.js");
var app = new express();
var expressStatic = require('express-static');
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use('/leavingmessage',leavingMessage);
app.use('/article',article);
app.use(expressStatic('./dist'));
app.get('/', function(req, res) {
   res.sendfile(__dirname + '/index.html'); 
});

app.listen(80);

