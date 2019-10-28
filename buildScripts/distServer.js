import express from 'express';
import path from 'path';
import compression from 'compression'

const port = 3000;
const app = express();

app.use(compression());

app.use(express.static('dist'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.get('/users', (req, res) => {
	res.json([
		{"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@mail.com"},
		{"id": 2, "firstName": "Jane", "lastName": "Will", "email": "Jane@mail.com"},
		{"id": 3, "firstName": "Anne", "lastName": "Olympia", "email": "Olympia10@gmail.com"}
	]);
});


app.listen(port, (err) => {
	if (err) {
		// eslint-disable-next-line no-console
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
