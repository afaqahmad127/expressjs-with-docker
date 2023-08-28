import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/docs', (req, res) => {
	res.send('Hello docs!');
});

app.listen(3000, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
