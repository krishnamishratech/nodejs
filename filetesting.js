//opens a file to read from, write and append to
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function(err, file){
	if (err) throw err;
	console.log('File opened!');

	fs.writeFile('mynewfile2.txt', 'Hello world!', function (err, data){
		if (err) throw err;
		console.log('data written');
	});

	fs.readFile('mynewfile2.txt', {encoding: 'utf-8'}, function (err, data){
		if (err) throw err;
		console.log('data read is: ' + data);
	});

	fs.appendFile('mynewfile2.txt', '\nMore text!', function(err){
		if (err) throw err;
		console.log('more data appended');
	});

	fs.writeFile('mynewfile2.txt', 'this is all the text in the file', function (err, data){
		if (err) throw err;
		console.log('data completely replaced again');
	});

	fs.readFile('mynewfile2.txt', {encoding: 'utf-8'}, function (err, data){
		if (err) throw err;
		console.log('new data read is: ' + data);
	});

});