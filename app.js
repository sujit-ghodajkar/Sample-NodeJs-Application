/*

REQUIRED PACKAGES ARE BEING INSTALLED...

*/
var http = require('http');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3005); // SETTING ENTRY PORT
app.set('views', __dirname + '/app/server/views'); // VIEW FOLDER DEFINED
app.set('view engine', 'ejs'); // VIEW ENGINE SET
app.use(express.static(__dirname + '/app/public')); // FOLDER ACCESSIBLE BY USERS DEFINED

require('./app/routes')(app); // ROUTE FILE CALLED

/*

HTTP SERVER CREATED

*/
http.createServer(app).listen(app.get('port'), function(){
	console.log('System is running on Port ' + app.get('port'));
});
