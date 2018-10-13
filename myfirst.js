// Sets computer up as a server that prints Hello World if anyone accesses port 8080
var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Hello World!');
}).listen(8080);