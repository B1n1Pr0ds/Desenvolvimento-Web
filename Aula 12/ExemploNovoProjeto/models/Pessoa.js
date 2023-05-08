const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa',{
        nome: String,
        celular: String,
        email: String,
});

module.exports = Pessoa;