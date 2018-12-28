var express = require("express");
var leavingMessage = require("./routes/leaving-message.js");
var app = new express();
var expressStatic = require('express-static');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use('/leavingmessage',leavingMessage);
app.use(expressStatic('./www'));
app.listen(8080);

