# MercadoLibre app - Buscador de vehículos

(Front End with React in https://github.com/KevinModernel/Frontend)

Aplicación para buscar vehículos publicados en Mercadolibre, filtrar datos obtenidos según interés (año, kilometraje, combustible, transmisión, etc) y poder analizar el precio de mercado de los vehículos de interés y obtener así una mejor oportunidad de negocio.

Utilizando Node y Express se monta el servidor para utilizar la aplicación. Se realizó un sencillo FrontEnd mediante con HTML y CSS para enviar el formulario hacia el el servidor, y React para renderizar los datas devueltos por el back. 

Ingresando marca y modelo del vehículo, se realiza un GET Request a la API de MercadoLibre mediante el promised-based HTTP Client Axios.

También se implemento una consulta a un servicio externo para obtener la cotización del USD al día de la consulta, en la API https://www.dolarsi.com/api/api.php?type=valoresprincipales.

Luego se despliega una tabla con los resultados, y opciones para filtrar y así obtener la información deseada. También se puede graficar la información para un mejor análisis.

# Consideraciones

Cantidad de resultados: API limitada a 200 resultados por request.
