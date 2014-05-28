//  OpenShift sample Node application
var http = require('http');

//Get the environment variables we need.
var ipaddr  = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var express = require('express')
, routes = require('./routes')
, user = require('./routes/user')
, http = require('http')
, path = require('path');

var app = express();

//all environments
app.set('port', process.env.PORT || 3500);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/tem', express.static(__dirname + '/tem'))
//development only
if ('development' == app.get('env')) {
app.use(express.errorHandler());
}

routes(app);


http.createServer(app).listen(port, ipaddr);
console.log("Server running at http://" + ipaddr + ":" + port + "/");
