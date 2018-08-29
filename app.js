var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');

//Routes
var index = require('./routes/index');
var tasks = require('./routes/tasks');


var app = express();
//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

/*app.get('/', function(req, res) {
	// body...
	res.send('Hello kali');
});

app.get('/asd', function(req, res) {
	// body...
	res.send('Hello world');
});*/

app.use('/', index);

app.listen(3000, function(err, res){
	console.log('Server has been started');
});