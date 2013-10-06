var servidor = require("http");
var url = require("url");

function funcionIniciar() {
    function funcionArrancaServidor(requiere, respuesta) {
        console.log("Alguien se ha conectado desde un navegador");
        respuesta.writeHead(200,{"Content-Type":"text/html"});
        respuesta.write("<h1>El servido Funciona Correctamente usando Ahora Modulo</h1>");
        respuesta.end("El texto que escribo aqui tambien se muestra en el navegador");
    }
    servidor.createServer(funcionArrancaServidor).listen(8888);
}

exports.exportsDeServidor = funcionIniciar;