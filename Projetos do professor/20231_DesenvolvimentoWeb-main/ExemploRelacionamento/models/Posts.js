const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    texto: {
        type: String,
        required: true
    },
    comentarios: [{
        data: {
            type: Date,
            default: Date.now
        },
        texto: {
            type: String,
            required: true
        }
    }],
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

postSchema.methods.addComentario = function (comentario) {
    console.log(comentario);
    this.comentarios.push(comentario);
    return this.save();
}


postSchema.methods.removerComentario = function (comentarioId) {
    this.comentarios.pull(comentarioId);
    return this.save();
}

const Posts = mongoose.model('Post', postSchema);


module.exports = Posts;