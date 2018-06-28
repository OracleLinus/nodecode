var express = require('express');
var request = require('request');

var app = express();

app.use(express.static('public'));
console.log('Exact name: ' + process.env.ORA_INSTANCE_NAME);
for (var i = 0; i < 10; i++) {
    runGetRequest(i);
}


// Does a GET request to ip.jsontest.com
function runGetRequest(var i) {
    
    //sample URL.
    var url = "http://129.157.179.180:3000/fighters/45/" + i + "/yellow/linusNode";
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

module.exports = app;
