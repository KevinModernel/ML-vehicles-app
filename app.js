const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./src/routes/index-router.js');
const source = process.env.SOURCE;

const app = express();

// Front files
app.use(express.static(source));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// app routers
app.use('/API', indexRouter);

// Innitialize Express Server
const PORT = 3000
try {
	app.listen(PORT);
	console.log("Express running on port: " + PORT);
} catch (e) {
	console.error('Unable to stablish server: ', e);
};
