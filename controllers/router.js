var express = require('express');
var router = express.Router();

var Song = require('.././models/Song');
var routes = require('./routes');

var song = new Song();

router.get('/', function(req, res) {
  routes['/'](req,res);
});

router.get('/song/edit', function(req, res) {
  routes['/song/edit'](req,res);
});

router.get('/song/update', function(req, res) {
  routes['/song/update'](req,res, song);
})

router.get('/song/:num', function(req, res) {
  routes['/song/:num'](req,res, song);
});

router.get('/song/1/2', function(req, res) {
  routes['/song/1/2'](req,res, song);
});

router.get('/song/1/2/3', function(req, res) {
  routes['/song/1/2/3'](req,res,song);
});


module.exports = router;