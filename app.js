var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var cookieSession = require('cookie-session');

var port = 3000 || process.env.PORT;
var app = express();
var dbUrl = 'mongodb://localhost/Mars';

mongoose.connect(dbUrl);

app.set('views','./app/views/pages');
app.set('view engine','jade');
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
app.use(bodyParser.json({limit:'50mb'}));
app.use(express.static(path.join(__dirname,'bundles')));
app.use(session({
	secret:'mars',
	store:new mongoStore({
		url:dbUrl,
		collection:'session'
	})
}))

require('./config/routes')(app);

app.locals.moment = require('moment');
app.listen(port);
console.log('mars starts on'+port);

if ('development' === app.get('env')) {
	app.set('showStackError',true);
	app.use(morgan(':method :url :status'));
	app.locals.pretty = true;
	mongoose.set('debug',true);
}