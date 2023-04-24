const mongoose = require('mongoose');
const Tarefa = require('./tarefa');
const Usuario = mongoose.model('Usuario', {
nome: String,
senha: String,
tarefasAtribuida: String
});
module.exports = Usuario;
