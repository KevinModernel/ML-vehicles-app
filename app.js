const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const indexRouter = require('./src/routes/index-router.js');

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// View engine
app.set('views', './public/views');
app.set('view engine', 'pug');

// app routers
app.use('/', indexRouter);

// Innitialize Express Server
const PORT = 3000
try {
	app.listen(PORT);
	console.log("Express running on port: " + PORT);
} catch (e) {
	console.error('Unable to stablish server: ', e);
};
