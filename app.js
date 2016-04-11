// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

// Set server port
app.listen(4000);
console.log('server is running');
 
// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // use either jade or ejs       
// instruct express to server up static assets
app.use(express.static('public'));

// set routes
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/top-scores', function(req, res) {
  res.render('topscores');
});