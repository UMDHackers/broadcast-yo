
//requires
var express = require('express');

//variables
var app = express();

//routes
app.get('/', function(req, res) {
  res.send('index.html');
});

app.listen(3000);

/*
console.log("work?");

var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('hello http');
});
server.listen(8080);
*/
