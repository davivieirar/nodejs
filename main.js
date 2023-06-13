const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url)

    response.writeHead()
    response.end('Hello World') ;
});

server.listen(8080, () => {
    console.log('ouvindo req na porta 8080')
});
