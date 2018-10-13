// Sets computer up as a server that prints Hello World if anyone accesses port 8080
var http = require('http');

//create server object
http.createServer(function (req, res) {
	//status code
	res.writeHead(200, {'Content-Type': 'text/html'});
	//end response
	res.end('Hello World!');
}).listen(8080);