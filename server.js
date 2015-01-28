// server.js

var utilities = require("./utilities/utilities.js");
var express = require("express");

var app = express();

console.log(utilities.formattedLogTimestamp() + "server.js restarting");

// var router = express.Router();

app.get("/", function(req, res){
    res.send("testing");
});

app.listen(3000);