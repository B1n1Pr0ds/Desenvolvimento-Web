const express = require('express');
const Curso = require('../models/Curso');
const router = express.Router();

router.post('/', async(req, res) => {
    const {nome, modulos, qtdHoras} = req.body;
    const Curso = {
        nome, modulos, qtdHoras
    }
    try{
        await Curso.create(Curso);
        res.status(201).json(Curso);
    } catch (error){
        res.status(500).json({error: error})
    }
});
router.get('/', async (req, res) => {
    try {
        const Curso = await Curso.find();
        res.status(200).json(Curso);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const tarefa = await Curso.findOne({ _id: req.params.id });
        if(!Curso){
            res.status(422).json({mensagem: "Curso não Encontrado"})
        };
        res.status(200).json(Curso);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

router.post('/addModulo', async (req, res)=>{
    try{
        const curso = await Curso.findOne ({ _id: req.body.idCurso})
        if(!curso)
        {
            res.status(422).json({mensagem: "Curso não encontrado"});
            return;
        }
        await curso.adModulo({nome: req.body.name, qtdHoras: req.body.qtdHoras});
        return res.status(200).json(curso);
    } catch (error){
        res.status(500).json({ error:error });
    }
});

module.exports = router;
