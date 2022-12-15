const { getRequestML } = require('../utils/ML-API-Utils.js');

const displayForm = (req, res) => {
	res.render('index');
};

const getData = async (req, res) => { // req.body.marca || "";
	const marca = req.body.marca;
	const modelo = req.body.modelo; 
	const storedData = await getRequestML(marca, modelo);
	res.render('index', { storedData } );
};

module.exports = { displayForm, getData }