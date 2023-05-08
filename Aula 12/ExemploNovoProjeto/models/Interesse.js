const mongoose = require('mongoose');

const InteresseSchema = new mongoose.Schema({
    pessoaId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoa'
    },
    cursoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso'
    }
});

const Interesse = mongoose.model('Interesse',InteresseSchema);
module.exports = Interesse;