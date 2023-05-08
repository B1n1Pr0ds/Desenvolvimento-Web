const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ mensagem: "Retorna lista de Cursos" });
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: "Retorna o curso de id: " + id });
});

module.exports = router;