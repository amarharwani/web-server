var express = require('express');
var app = express();
var port = 3000;

//var date = new Date().toString();

// root url ('/')

// app.get('/' , function (req, res) {
// 	res.send('hello express')
// });


var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit');
		next();
		
},
logger: function (req, res, next)  {
 	console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
 	next();
 }
};

//app.use( middleware.requireAuthentication); // application middleware that will call for each page + with string  private route hit

app.use(middleware.logger); 
// will call for eact page/route

// below middleware.requireAuthentication is added to this particular route , and  will call string private route hit
app.get('/about' ,middleware.requireAuthentication, function (req, res) {
 	res.send('about us !')
 });

app.use(express.static(__dirname + '/public'));
app.listen(port , function () {
	console.log('server has started ' + port);
});