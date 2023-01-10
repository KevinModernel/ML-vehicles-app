class Car {
	constructor(index, title, kilometers, price, year, engine, transmission, fuel, link) {
		this.index = index;
		this.title = title
		this.kilometers = kilometers;
		this.price = price;
		this.year = year;
		this.engine = engine;
		this.transmission = transmission;
		this.fuel = fuel;
		this.link = link;
	}
}

const dataInResponse = (response, cotizacionUSD) => { // Busca index object km dentro de .attributes
	let storeData = [];
	for(let j=0; j < response.data.results.length; j++) {
		storeData.push(new Car(
			j, 
			getTitle(response, j),
			getKilometers(response, j), 
			getPrice(response, j, cotizacionUSD),
			getYear(response, j),
			getEngine(response, j),
			getTransmission(response, j),
			getFuel(response, j),
			getLink(response, j)
			) 
		)
	};
	storeData = sortStoreData(storeData);
	return storeData;
};

const getTitle = (response, j) => {
	return response.data.results[j].title;
};
// attributes no siempre vienen en el mismo orden, por lo que no se sabe de antemano en que posición (index)
// va a estar el atributo deseado. Entonces, utilizo el siguiente algoritmo de busqueda para los
// distintos atributos.
const getKilometers = (response, j) => {
	let k = 0;
	for(let i=0; i < response.data.results[j].attributes.length; i++) { 
		if (response.data.results[j].attributes[i].id == "KILOMETERS") {
			k = i;
			break;
		}
	};
	return response.data.results[j].attributes[k].value_name;
};

const getPrice = (response, j, cotizacionUSD) => {
	const currency = response.data.results[j].currency_id;
	if (currency == 'USD') {
		return response.data.results[j].price*cotizacionUSD;
	} else {
		return response.data.results[j].price;
	}
};

const getYear = (response, j) => {
	let k = 0;
	for(let i=0; i < response.data.results[j].attributes.length; i++) { 
		if (response.data.results[j].attributes[i].id == "VEHICLE_YEAR") {
			k = i;
			break;
		}
	};
	return response.data.results[j].attributes[k].value_name;
};

const getEngine = (response, j) => {
	let k = 0;
	for(let i=0; i < response.data.results[j].attributes.length; i++) { 
		if (response.data.results[j].attributes[i].id == "ENGINE_DISPLACEMENT") {
			k = i;
			break;
		}
	};
	return response.data.results[j].attributes[k].value_name;
};

const getTransmission = (response, j) => {
	let k = 0;
	for(let i=0; i < response.data.results[j].attributes.length; i++) { 
		if (response.data.results[j].attributes[i].id == "TRANSMISSION") {
			k = i;
			break;
		}
	};
	return response.data.results[j].attributes[k].value_name;
};

const getFuel = (response, j) => {
	let k = 0;
	for(let i=0; i < response.data.results[j].attributes.length; i++) { 
		if (response.data.results[j].attributes[i].id == "FUEL_TYPE") {
			k = i;
			break;
		}
	};
	return response.data.results[j].attributes[k].value_name;
};

const getLink = (response, j) => {
	return response.data.results[j].permalink;
};

const sortStoreData = (storeData) => {
	sortedStoreData = storeData.sort(compareValues('price'));
	return sortedStoreData;
};

function compareValues(key, order = 'desc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}



module.exports = { dataInResponse }