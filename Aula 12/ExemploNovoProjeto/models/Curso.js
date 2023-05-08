const mongoose = require("mongoose")

const cursoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    modulos: [{
        nome: {
            type: String,
            required: true
        },
        qtdHoras:{
            type : Number,
            required: true
        }
    }],

})

cursoSchema.methods.adModulo = function (modulo)
{
    this.modulos.push(modulo);
    return this.save();
}
cursoSchema.methods.removeModulo = function (moduloID)
{
    this.modulos.pull(moduloID);
    return this.save();
}
const Curso = mongoose.model('Curso', cursoSchema);
module.exports = Curso;