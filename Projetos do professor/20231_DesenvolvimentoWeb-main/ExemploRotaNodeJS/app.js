const express = require('express');
const app = express();

app.use(express.json());

const usuarioController = require('./controllers/AlunoController');
const cursoController = require('./controllers/CursoController');

app.use('/curso', cursoController);
app.use('/aluno', usuarioController);

app.listen('3000', () => {
    console.log('Servidor iniciado na porta 3000!!!');
})