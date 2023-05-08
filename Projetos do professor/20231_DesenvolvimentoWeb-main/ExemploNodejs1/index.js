const http = require('http');

const hostname = 'localhost';
const port = '3000';

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");

    if (request.url === "/aluno" && request.method == "GET") {
        response.end(JSON.stringify({ mensagem: "ALUNO!!!" }));
    }
    else if (request.url === "/curso") {
        response.end(JSON.stringify({ mensagem: "CURSO!!!" }));
    }
    else
        response.end(JSON.stringify({ mensagem: "Servidor rodando com sucesso!!!" }));
});

server.listen(port, hostname, () => {
    console.log("Servidor executando na porta: " + port);
});