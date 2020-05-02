// For debugger in node execute node --inspect http.
// access to chrome://inspect and inspect my app http
// I can add my local resources in chrome tab inspector > Sources > Add forlder to workspace
const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('Nueva petición!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            let saludo = hola()
            res.write('Hola, que tal');
            res.end();
            break;
        
        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' })

    // // Escribir respuesta al usuario
    // res.write('Hola, ya se usar HTTP de NodeJS');

    // res.end();
}

function hola(){
    return 'ola q tal function'
}
console.log("Escuchando http en el puerto 3000");