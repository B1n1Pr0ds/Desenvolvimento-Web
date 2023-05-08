const express = require('express');
const { randomUUID } = require('crypto');

const app = express();
app.use(express.json());

const pessoas = [];

app.get("/pessoas", (request, response) => {
    return response.json(pessoas);
});
app.get("/pessoas/:id", (request, response) => {
    const { id } = request.params;
    response.json(pessoas.find(p => p.id == id));
});
app.put("/pessoas/:id", (request, response) => {
    const { id } = request.params;
    const { nome, celular } = request.body;
    const p = pessoas.find(p => p.id == id);
    p.nome = nome;
    p.celular = celular;
    response.json(p);
});
app.delete("/pessoas/:id", (request, response) => {
    const { id } = request.params;
    const index = pessoas.findIndex(p => p.id == id);
    pessoas.splice(index, 1);
    response.end();
});

app.post("/pessoas", (request, response) => {
    const { nome, celular } = request.body;
    const pessoa = {
        nome,
        celular,
        id: randomUUID()
    }
    pessoas.push(pessoa);
    return response.json(pessoa);
});

app.listen(3000, () => {
    console.log("Rodando na porta 3000...");
});
