// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello, World!");
// });

// server.listen(
//     3000,
//     "esto es un mensaje de prueba para ver que el server esta corriendo",
//     () => {
//         console.log("Server running at http://localhost:3000/");
//     }
// );

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
});

server.listen(3000, "localhost", () => {
    console.log("Server running at http://localhost:3000/");
});
