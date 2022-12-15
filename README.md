# MLapp
 

Aplicaci�n para buscar veh�culos publicados en Mercadolibre, filtrar datos obtenidos seg�n inter�s (a�o, kilometraje, combustible, transmisi�n, etc) y poder analizar el precio de mercado de los veh�culos de inter�s.

Publicaciones en USD: En archivo "datahandles.js" modificar valor de variable "cotizacionUSD = X" seg�n cotizaci�n a la hora de realizar la consulta.

Cantidad de resultados: API limitada a 50 resultados por request. En archivo "ML-API-Utils.js" se realiza el HTTP request a la API, y esta programada para traer 100 resultados (realiza 2 requests). En caso de precisar m�s resultados, agregar m�s requests.

Offset resultados: Con los 2 requests se traen los primeros 100 resultados de la busqueda, los cuales est�n ordenados seg�n "M�s relevantes". Si se tiene inter�s de ir a resultados menos relevantes, se puede modificar el offset de http request en "ML-API-Utils.js", aumentando su valor.