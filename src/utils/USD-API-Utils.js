const axios = require('axios');

const getUSDToday = async () => {
	try {
		const cotizacionesJSON = await axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales");
		let cotizacionUSD = cotizacionesJSON.data[1].casa.venta;
		cotizacionUSD = cotizacionUSD.replace(",", ".");
		console.log("USD BLUE: " + cotizacionUSD);
		return cotizacionUSD;
	} catch (e) {
		console.log(e);
	};
};

module.exports = { getUSDToday }