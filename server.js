var http = require("http");
var static = require("node-static");
var file = new static.Server(".", {cache: false});

http.createServer(function(req, res) {
	req.addListener("end", function() {
		file.serve(req, res);
	}).resume();
}).listen(5555);

