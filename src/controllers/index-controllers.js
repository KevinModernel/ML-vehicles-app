const { getRequestML } = require('../utils/ML-API-Utils.js');
const { dataInResponse } = require('../utils/datahandler.js');
const { getUSDToday } = require('../utils/USD-API-Utils.js');

const displayForm = (req, res) => {
	res.render('index');
};

const getData = async (req, res) => { // req.body.marca || "";
	const marca = req.body.marca;
	const modelo = req.body.modelo; 
	let storedData = await getRequestML(marca, modelo);
	const cotizacionUSD = await getUSDToday();
	storedData = dataInResponse(storedData, cotizacionUSD);
	res.render('index', { storedData } );
};

module.exports = { displayForm, getData }