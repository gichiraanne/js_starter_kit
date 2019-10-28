import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'))
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
