const express = require('express');
const router = express.Router();
const Filme = require('../models/filme.model');

router.get('/api/filmes', async (req, res) => {
try {
const filmes = await Filme.findAll({ raw: true });
res.json(filmes);
} catch (erro) {
res.status(500).json({ erro: 'Erro ao consultar filmes' });
}
});

module.exports = router;