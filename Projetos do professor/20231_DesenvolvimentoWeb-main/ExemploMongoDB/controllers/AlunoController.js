const express = require('express');
const router = express.Router();
const Aluno = require('../models/Aluno');

router.post('/', async (req, res) => {
    const { ra, nome, ativo } = req.body;
    const aluno = { ra, nome, ativo };
    try {
        await Aluno.create(aluno);
        res.status(201).json(aluno);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

router.get('/', async (req, res) => {
    try {
        const alunos = await Aluno.find();
        res.status(200).json(alunos);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const aluno = await Aluno.findOne({ _id: id });
        res.status(200).json(aluno);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

module.exports = router;