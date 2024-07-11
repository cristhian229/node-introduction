// módulo llamado fs que permite interactuar con el sistema de archivos de tu computadora. Con este módulo, puedes leer y escribir archivos, crear y eliminar directorios, y mucho más, siempre y cuando tengas los permisos necesarios.

const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});