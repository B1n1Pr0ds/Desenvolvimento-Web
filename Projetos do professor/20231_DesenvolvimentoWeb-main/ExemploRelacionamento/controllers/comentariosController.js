const express = require('express');
const router = express.Router();

const Posts = require('../models/Posts');


router.post('/', async (req, res) => {

    const { idPost, textoComentario } = req.body;

    const comentario = {
        texto: textoComentario,
        data: new Date()
    }

    try {
        const post = await Posts.findOne({ _id: idPost });
        if (!post) {
            res.status(422).json({ mensagem: "Post não encontrado" });
            return
        }
        console.log(comentario);
        await post.addComentario(comentario);

        res.status(200).json(post);

    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.delete('/:idPost/:idComentario', async (req, res) => {
    try {
        const idPost = req.params.idPost;
        const post = await Posts.findOne({ _id: idPost });
        if (!post) {
            res.status(422).json({ mensagem: "Post não encontrado" });
            return;
        }
        await post.removerComentario(req.params.idComentario);

        res.status(200).json({ mensagem: "Excluído com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;