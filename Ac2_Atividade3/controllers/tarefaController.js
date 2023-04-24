const express = require('express');
const Tarefa = require('../Models/tarefa');
const router = express.Router();

router.post('/', async (req, res) => {
    const { missao, responsavel, concluida } = req.body;
    const tarefa = {
    missao, responsavel, concluida
    }
    try {
    await Tarefa.create(tarefa);
    res.status(201).json(tarefa);
    } catch (error) {
    res.status(500).json({ error: error });
    }
    });
    router.put('/:id/concluir', async (req, res) => {
        const {concluida } = req.body;
        const tarefa = {
        concluida: !concluida
        }
        try {
        await Tarefa.create(tarefa);
        res.status(201).json(tarefa);
        } catch (error) {
        res.status(500).json({ error: error });
        }
        });


router.get('/', async (req, res) => {
    try {
        const tarefa = await Tarefa.find();
        res.status(200).json(tarefa);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const tarefa = await Tarefa.findOne({ _id: id });
        res.status(200).json(tarefa);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});
router.delete('/:id', async (req, res) => {
    try {
    const id = req.params.id;
    const tarefa = await Tarefa.findOne({ _id: id });
    if (!tarefa) {
    res.status(422).json({ mensagem: "Tarefa não encontrado" });
    return;
    }
    await Tarefa.deleteOne({ _id: id });
    res.status(200).json({ mensagem: "Excluído com sucesso!" });
    } catch (error) {
    res.status(500).json({ error: error });
    }
    });

    router.patch('/:id', async (req, res) => {
        try {
        const id = req.params.id;
        const { responsavel, concluida } = req.body;
        const usu = {
         responsavel, concluida
        }
        const updateUsu = await Tarefa.updateOne({ _id: id }, usu);
        if (updateUsu.matchedCount === 0) {
        res.status(422).json({ mensagem: "Usuario não encontrado" });
        return
        }
        res.status(200).json(usu);
        } catch (error) {
        res.status(500).json({ error: error });
        }
        });
        router.get('/:id/responsavel', async (req, res) => {
            const id = req.params.id;
            try {
                const tarefa = await Tarefa.find({ responsavel: id });
                res.status(200).json(tarefa);
            } catch (error) {
                res.status(500).json({ erro: error });
            }
        });
    

module.exports = router;