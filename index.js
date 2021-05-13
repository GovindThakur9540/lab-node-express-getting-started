//Node Server
var http = require("http");

http
	.createServer(function (req, res) {
		res.write("Welcome to nodejs server");
		res.end();
	})
	.listen(3000, () => console.log("server started at 3000"));

//Express Server
const express = require("express");
var app = express();

app.get('/', (req, res) => {
	res.send("Welcome to express server");
});

app.get('/sample', (req, res) => {
	res.send("Sample Express Page");
});

app.listen(4000, () => console.log("server started at 4000"));