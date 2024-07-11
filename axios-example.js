// npm es el gestor de paquetes de node.js Permite instalar, actualizar y eliminar paquetes de Node.js. Los paquetes se instalan en la carpeta node_modules. El catalogo de paquetes de tu proyecto se guarda en el archivo package.json.

// axios es una librería de JavaScript que se utiliza para hacer solicitudes HTTP desde el navegador o desde un servidor usando Node. js

const axios = require("axios");

axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
