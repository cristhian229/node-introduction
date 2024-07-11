// Node.js incluye dos módulos llamados path y os que permiten interactuar con el sistema de archivos y el sistema operativo de tu computadora.

// Módulo path:

// El módulo path proporciona utilidades para trabajar con rutas de archivos y directorios. Por ejemplo, puedes unir rutas, resolver rutas relativas, extraer el nombre de un archivo de una ruta, y mucho más.

const path = require("path");

const filePath = "/Users/johndoe/Documents/example.txt";

console.log(path.dirname(filePath)); // dirname se utiliza para obtener el directorio de la ruta
console.log(path.basename(filePath)); // basename se utiliza para obtener el nombre del archivo de la ruta
console.log(path.extname(filePath)); // extname se utiliza para obtener la extensión del archivo de la ruta
