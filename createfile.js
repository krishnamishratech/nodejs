//creates a new file that says Hello world! and also prints to console
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello world!', function (err){
	if (err) throw err;
	console.log('Saved');
});

fs.rename('mynewfile1.txt', 'mynewfile2.txt', function (err){
	if (err) throw err;
	console.log('file renamed');
});