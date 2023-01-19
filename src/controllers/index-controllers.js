const { getRequestML } = require('../utils/ML-API-Utils.js');
const { dataInResponse } = require('../utils/datahandler.js');
const { getUSDToday } = require('../utils/USD-API-Utils.js');

const getData = async (req, res) => {
	const marca = req.params.marca;
	const modelo = req.params.modelo; 
	let storedData = await getRequestML(marca, modelo);
	const cotizacionUSD = await getUSDToday();
	storedData = dataInResponse(storedData, cotizacionUSD);
	console.log("storedData: " + storedData);
	res.json(storedData);
};

module.exports = { displayForm }