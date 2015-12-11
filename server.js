var express = require('express');
var app = express();
var router = require('./controllers/router');

app.set('view engine', 'ejs');
app.use(express.static("assets"));
app.use('/', router);

var server = app.listen(process.env.port || 3001, function () {
  var port = server.address().port;
  console.log('Server up and listening on', port);
});
