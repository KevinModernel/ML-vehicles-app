# MercadoLibre app - Buscador de vehículos

(Under development - Implementing React Front-end)

Aplicación para buscar vehículos publicados en Mercadolibre, filtrar datos obtenidos según interés (año, kilometraje, combustible, transmisión, etc) y poder analizar el precio de mercado de los vehículos de interés y obtener así una mejor oportunidad de negocio.

Utilizando Node y Express se monta el servidor para utilizar la aplicación. Se realizó un sencillo FrontEnd mediante el Template Engine PUG y la biblioteca Bootstrap para ingresar los datos de busqueda a través del browser y luego mostrarlos. 

Ingresando marca y modelo del vehículo, se realiza un GET Request a la API de MercadoLibre mediante el promised-based HTTP Client Axios.

También se implemento una consulta a un servicio externo para obtener la cotización del USD al día de la consulta, en la API https://www.dolarsi.com/api/api.php?type=valoresprincipales.

Luego se despliega una tabla con los resultados, y opciones para filtrar y así obtener la información deseada. También se puede graficar la información para un mejor análisis.

# Consideraciones

Cantidad de resultados: API limitada a 50 resultados por request. En archivo "ML-API-Utils.js" se realiza el HTTP request a la API, y esta programada para traer 100 resultados (realiza 2 requests). En caso de precisar más resultados, agregar más requests.

Offset resultados: Con los 2 requests se traen los primeros 100 resultados de la busqueda, los cuales están ordenados según "Más relevantes". Si se tiene interés de ir a resultados menos relevantes, se puede modificar el offset de http request en "ML-API-Utils.js", aumentando su valor.
