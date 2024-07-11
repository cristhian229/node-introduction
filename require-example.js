const fs = require("fs");  // en node se pueden importar modulos de dos maneras, con require para los sincronos y con import para los asincronos

fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});
