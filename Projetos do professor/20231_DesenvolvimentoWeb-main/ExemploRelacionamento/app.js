const express = require('express');
const app = express();
const mongoose = require('mongoose');
const usuarioController = require('./controllers/usuarioController');
const postsController = require('./controllers/postsController');
const comentariosController = require('./controllers/comentariosController');

app.use(express.json());

app.use('/usuarios', usuarioController);
app.use('/posts', postsController);
app.use('/comentarios', comentariosController);

mongoose.connect('mongodb+srv://rafaelmorenosax:I5tiC30kIYSsuvBR@apitestemongodb.jqi5v1r.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(3000, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor iniciado na porta 3000');
        })
    })
    .catch((err) => {
        console.log(err);
    });
