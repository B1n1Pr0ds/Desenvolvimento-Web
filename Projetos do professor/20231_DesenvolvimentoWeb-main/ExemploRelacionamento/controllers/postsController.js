const express = require('express');
const router = express.Router();

const Posts = require('../models/Posts');

router.post('/', async (req, res) => {
    const { titulo, texto, usuarioId } = req.body;

    const post = {
        titulo, texto, usuarioId, comentarios: []
    }
    try {
        await Posts.create(post);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});


router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const post = await Posts.findOne({ _id: req.params.id });
        if (!post) {
            res.status(422).json({ mensagem: "Post não encontrado" });
            return
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.get('/buscarPorUsuario/:id', async (req, res) => {
    try {
        const post = await Posts.find({ usuarioId: req.params.id });
        if (!post) {
            res.status(422).json({ mensagem: "Post não encontrado" });
            return
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Posts.findOne({ _id: id });
        if (!post) {
            res.status(422).json({ mensagem: "Post não encontrado" });
            return;
        }
        await Posts.deleteOne({ _id: id });
        res.status(200).json({ mensagem: "Excluído com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;