
//the convention to give same name for the local variable and requirement module
//we require a module call http and asked it to give the return value or method to the local variable\
//var <local variable> = require('<module>')
var http = require('http');
var url = require('url');

/*
http.createServer(function(req,res){
	res.end('Hello, Raspberry pi!');
}).listen(80);
*/

function startfunction(route, handle){
	function onRequest(request, response){
		//url
		var pathname = url.parse(request.url).pathname;
		console.log('<url>Request for '+ pathname +' received.');
		//router
		route(handle, pathname);
		//
		console.log('<function call>request received');
		response.writeHead(200,{'Content-Type':'text/plain'});
		response.write('hello world\n CrisKau pussy!');
		response.end();
	}

	http.createServer(onRequest).listen(80);
	console.log('<function call>server has started');

}
exports.start = startfunction;
