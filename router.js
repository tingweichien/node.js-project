function route(handle, pathname){
	console.log('<url>About to route a request '+pathname);
	//handle
	if (typeof handle[pathname]==='function'){
		handle[pathname]();
	}
	else {
		console.log('No request handler found for '+pathname);
	}
}

exports.route = route;
