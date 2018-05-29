var express = require('express');
var path = require('path')
var app = express();
 
app.get('/', function (req, res) {
   res.sendFile(path.resolve(__dirname,  './index.html'));
})

app.get('*', function (req, res) {
   res.sendFile(path.resolve(__dirname,  './index.html'));
});

var server = app.listen(3000, function () {});