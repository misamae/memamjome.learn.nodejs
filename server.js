// server.js

var utilities = require("./utilities/utilities.js");
console.log(utilities.formattedLogTimestamp() + "server.js restarting");

var index = require("./api/index.js")
var express = require("express");
var connect = require('./data/connect.js');

connect.connect(function (err) {
    console.log("connect callback");
});
var app = express();

index.init(app);

// var router = express.Router();
app.listen(3000);