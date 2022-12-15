const axios = require('axios');
const { dataInResponse } = require('../utils/datahandler.js');

const authToken = process.env.AUTHTOKEN

const getRequestML = async (marca, modelo) => {
	try {
		// API limits 50 results request
		const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${marca}%20${modelo}&limit=50`,
			{ headers: {
				'Authorization': authToken
				}
			}
		)
		if (response.data.paging.total > 50) { // Si hay, agrego 50 results más.
			const secondResponse = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${marca}%20${modelo}&limit=50&offset=50`,
				{ headers: {
					'Authorization': 'APP_USR-5823179011221011-121213-2fb50e401b3a2a651b82f3467fbea9e7-810557706'
					}
				}
			)
			for (let i=0; i < 50; i++) {
				response.data.results.push(secondResponse.data.results[i]);	
			};
		};
		return dataInResponse(response);	
	} catch (e) {
		console.log(e)
		return ['error'];
	}
};

module.exports = { getRequestML }