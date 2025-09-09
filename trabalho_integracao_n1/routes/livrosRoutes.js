const express = require('express');
const router = express.Router();
const livrosService = require('../services/livrosService');

// Listar todos os livros
router.get('/', (req, res) => {
    res.json(livrosService.listarLivros());
});

// Buscar livros disponíveis
router.get('/disponiveis', (req, res) => {
    res.json(livrosService.listarDisponiveis());
});

// Criar novo livro
router.post('/', (req, res) => {
    const livro = livrosService.criarLivro(req.body);
    res.status(201).json(livro);
});

// Atualizar livro existente
router.put('/:id', (req, res) => {
    const livroAtualizado = livrosService.atualizarLivro(Number(req.params.id), req.body);
    if(livroAtualizado){
        res.json(livroAtualizado);
    } else {
        res.status(404).json({ mensagem: "Livro não encontrado" });
    }
});

// Deletar livro
router.delete('/:id', (req, res) => {
    const deletado = livrosService.deletarLivro(Number(req.params.id));
    if(deletado){
        res.json({ mensagem: "Livro deletado com sucesso" });
    } else {
        res.status(404).json({ mensagem: "Livro não encontrado" });
    }
});
    
module.exports = router;
