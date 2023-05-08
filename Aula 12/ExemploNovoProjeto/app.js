const express = require('express');
const app = express();
const mongoose = require('mongoose');
const InteressadoController = require('./controllers/InteressadoController');
const cursoController = require('./controllers/cursoController');

app.use(express.json());

app.use('/Curso', cursoController);
app.use('/Interesse', InteressadoController);

const db_user = 'viniciusbotelho527';
const db_pass = 'HTGfAnnxeuxlRITr';
mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@cluster0.2jdtnne.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen('3000', () => {
            console.log('MongoDB conectado!!!')
            console.log('Servidor iniciado na porta 3000!!!');
        })
    }).catch((error) => {
        console.log(error);
    });

