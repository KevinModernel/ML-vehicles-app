var fs = require('fs');
const { getRequestML } = require('../utils/ML-API-Utils.js');
const { dataInResponse } = require('../utils/datahandler.js');
const { getUSDToday } = require('../utils/USD-API-Utils.js');

const displayForm = (req, res) => {
	res.send("Hello World!");
	//res.render('index');
};

const getData = async (req, res) => { // req.body.marca || "";
	const marca = req.body.marca;
	const modelo = req.body.modelo; 
	let storedData = await getRequestML(marca, modelo);
	const cotizacionUSD = await getUSDToday();
	storedData = dataInResponse(storedData, cotizacionUSD);
	// console.log(JSON.stringify(storedData));
	// console.log("hi");
	var file = await fs.createWriteStream('array.JSON');
	console.log("hi");
	file.on('error', function(err) { console.log("error") });
	file.write(JSON.stringify(storedData));
	file.end();

	res.render('index', { storedData } );
};

module.exports = { displayForm, getData }