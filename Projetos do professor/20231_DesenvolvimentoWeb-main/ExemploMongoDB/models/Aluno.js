const mongoose = require('mongoose');

const Aluno = mongoose.model('Aluno', {
    ra: String,
    nome: String,
    ativo: Boolean
});
module.exports = Aluno;