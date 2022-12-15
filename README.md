# MLapp
 

Aplicación para buscar vehículos publicados en Mercadolibre, filtrar datos obtenidos según interés (año, kilometraje, combustible, transmisión, etc) y poder analizar el precio de mercado de los vehículos de interés.

Publicaciones en USD: En archivo "datahandles.js" modificar valor de variable "cotizacionUSD = X" según cotización a la hora de realizar la consulta.

Cantidad de resultados: API limitada a 50 resultados por request. En archivo "ML-API-Utils.js" se realiza el HTTP request a la API, y esta programada para traer 100 resultados (realiza 2 requests). En caso de precisar más resultados, agregar más requests.

Offset resultados: Con los 2 requests se traen los primeros 100 resultados de la busqueda, los cuales están ordenados según "Más relevantes". Si se tiene interés de ir a resultados menos relevantes, se puede modificar el offset de http request en "ML-API-Utils.js", aumentando su valor.