

//the convention to give same name for the local variable and requirement module,just like include a lib
//we require a module call http and asked it to give the return value or method to the local variable
//var <local variable> = require('<module>')
var http = require('http');
var url = require('url');
var express = require('express');
var app = express();

/*
http.createServer(function(req,res){
	res.end('Hello, Raspberry pi!');
}).listen(80);
*/

function startfunction(route, handle){
/*	
	function onRequest(request, response){

		//url
		var pathname = url.parse(request.url).pathname;
		console.log('<url>Request for '+ pathname +' received.');
		//router
		route(handle, pathname);
		//
		console.log('<function call>request received');
		response.writeHead(200,{'Content-Type':'text/plain'});
		response.write('hello world \nyeh!');

		//connect to the front 
		app.use(express.static(__dirname+'/html_project/'));

		response.end();
	}
*/	

	//! this is used to build the connection between Back End and Front End
	//app.use('/gogo', express.static(__dirname+'/html_project/'));
	app.use(express.static(__dirname+'/html_project/'));

	//http.createServer(onRequest).listen(80);
	http.Server(app).listen(80, () => {
		console.log('start');
	})
	

	//console.log('<function call>server has started');

}
exports.start = startfunction;
