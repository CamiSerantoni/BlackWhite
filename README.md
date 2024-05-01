#  Black and White 🖤🤍🏁🐻‍❄️🐈‍⬛


Este repositorio contiene el código fuente de la aplicación web desarrollada para el Black and White, realizado como parte de un ejercicio de validación de conocimientos de procesamiento de imágenes 
con JIMP y la descarga de aplicaciones. 

## Descripción de la solución 💻

La empresa Black and White Spa está promocionando una campaña para las redes sociales
en donde quieren ofrecer un sitio web que permita escribir la URL de una imagen de internet
y que ésta sea procesada por el servidor para ser devuelta en blanco y negro.

Deberás crear un servidor que disponibilice una ruta raíz que devuelva un HTML con el
formulario para ingresar la URL de la imagen con estilos CSS de un documento interno en los
archivos del servidor. El formulario debe redirigir a otra ruta del servidor que procese la
imagen y la devuelva en blanco y negro. Como muestran las siguientes imágenes:


Siguiendo esta gráfica: 

![image](https://github.com/CamiSerantoni/BlackWhite/assets/152921799/9f6a887c-3b36-4904-b363-054bbfdf9364)

![image](https://github.com/CamiSerantoni/BlackWhite/assets/152921799/d4f4f53b-bcdf-4428-bb27-fe4338d7ccd8)

## Requerimientos: 

1. El servidor debe disponibilizar una ruta raíz que devuelva un HTML con el formulario
para el ingreso de la URL de la imagen a tratar. (3 Puntos)
2. Los estilos de este HTML deben ser definidos por un archivo CSS alojado en el
servidor. (2 Puntos)
3. El formulario debe redirigir a otra ruta del servidor que deberá procesar la imagen
tomada por la URL enviada del formulario con el paquete Jimp. La imagen debe ser
procesada en escala de grises y redimensionada a unos 350px de ancho. (3 Puntos)
4. La imagen alterada debe ser almacenada con un nombre incluya una porción de un
UUID y con extensión “jpg”, por ejemplo: 3dcb6d.jpeg. (2 Puntos)

## Estructura del Proyecto 🩻

El proyecto está estructurado de la siguiente manera:

## Dependencias 🪢

El proyecto utiliza las siguientes dependencias principales:

- **Express**: Para la creación del servidor web.
- **Axios**
- **Express-handlebars**
- **UUID**
- **JIMP**
- **Bootstrap**

![image](https://github.com/CamiSerantoni/BlackWhite/assets/152921799/ace873be-6564-42c3-a124-b20c0ed502a9)


## Requisitos y Configuración 🔩🛠️🧰

Para ejecutar el proyecto localmente, asegúrate de tener instalado Node.js y npm. Luego, sigue estos pasos:

1. Clona este repositorio: `git clone <URL_del_repositorio>`
2. Accede al directorio del proyecto: `cd <nombre_del_directorio>`
3. Instala las dependencias del proyecto: `npm install`
4. Inicia el servidor local: `npm run dev`
5. Abre tu navegador web y accede a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Integrante: 😺

- Camila Serantoni R. 
