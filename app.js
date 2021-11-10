const express = require('express');
const app = express();

app.use(express.static(__dirname + '/Public'));

const port = 5000;
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res) => {
	res.sendFile(__dirname + '/views/about.html');
});

app.get('/books', (req, res) => {
	res.sendFile(__dirname + '/views/books.html');
});

app.listen(port, function () {
	console.log(`Server listening on port ${port}`)
});