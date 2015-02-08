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

//send a default page back for startup only
app.get("/", function (req, res) {
    res.send('<html><body><h1>Welcome to ParsShipping.com</h1></body></html>');
});
//
index.init(app);
//

// var router = express.Router();
app.listen(3000);

console.log('listening to port 3000');