const axios = require('axios');

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
		if (response.data.paging.total > 50) { // Si hay, agrego 50 resultados más.
			const secondResponse = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${marca}%20${modelo}&limit=50&offset=50`,
				{ headers: {
					'Authorization': authToken
					}
				}
			)
			for (let i=0; i < 50; i++) {
				response.data.results.push(secondResponse.data.results[i]);	
			};
		};
		return response;
	} catch (e) {
		console.log(e)
		return ['error'];
	}
};

module.exports = { getRequestML }