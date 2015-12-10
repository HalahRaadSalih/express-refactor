var express = require('express');
var app = express();
var Song = require('./models/Song');
var routes = require('./controllers/routes');

app.set('view engine', 'ejs');
app.use(express.static("assets"));

// create song object
var song = new Song();

app.get('/', function(req, res) {
  routes['/'](req,res);
});

app.get('/song/edit', function(req, res) {
  routes['/song/edit'](req,res);
});

app.get('/song/update', function(req, res) {
  routes['/song/update'](req,res, song);
})

app.get('/song/:num', function(req, res) {
  routes['/song/:num'](req,res, song);
});

app.get('/song/1/2', function(req, res) {
  routes['/song/1/2'](req,res, song);
});

app.get('/song/1/2/3', function(req, res) {
  routes['/song/1/2/3'](req,res,song);
});

var server = app.listen(3001, function () {
  var port = server.address().port;
  console.log('Server up and listening on', port);
});
