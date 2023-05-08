const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const usuarioController = require('./controllers/AlunoController');
const cursoController = require('./controllers/CursoController');

app.use('/curso', cursoController);
app.use('/aluno', usuarioController);

const db_user = 'rafaelmorenosax';
const db_pass = '6KKbkhIud6d0xvti';

mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@cluster0.pyb9muu.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen('3000', () => {
            console.log('MongoDB conectado!!!')
            console.log('Servidor iniciado na porta 3000!!!');
        })
    }).catch((error) => {
        console.log(error);
    });

