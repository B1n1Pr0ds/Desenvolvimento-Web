const mongoose = require('mongoose');
const Usuario = require('./usuario')


const Tarefa = mongoose.model('Tarefa', {
missao: String,
responsavel: String,
concluida: Boolean
});
module.exports = Tarefa;