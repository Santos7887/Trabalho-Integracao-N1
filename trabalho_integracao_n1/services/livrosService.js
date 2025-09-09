let livros = [
    { id: 1, titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605, disponivel: true },
    { id: 2, titulo: "1984", autor: "George Orwell", ano: 1949, disponivel: true },
    { id: 3, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, disponivel: true },
    { id: 4, titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997, disponivel: true },
    { id: 5, titulo: "O Senhor dos Anéis: A Sociedade do Anel", autor: "J.R.R. Tolkien", ano: 1954, disponivel: true },
    { id: 6, titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", ano: 1865, disponivel: true }
];

function listarLivros() {
    return livros;
}

function listarDisponiveis() {
    return livros.filter(l => l.disponivel);
}

function criarLivro(dados) {
    const novoLivro = { id: livros.length + 1, disponivel: true, ...dados };
    livros.push(novoLivro);
    return novoLivro;
}

function atualizarLivro(id, dados) {
    const index = livros.findIndex(l => l.id === id);
    if(index !== -1){
        livros[index] = { ...livros[index], ...dados };
        return livros[index];
    }
    return null;
}

function deletarLivro(id) {
    const index = livros.findIndex(l => l.id === id);
    if(index !== -1){
        livros.splice(index, 1);
        return true;
    }
    return false;
}

module.exports = { listarLivros, listarDisponiveis, criarLivro, atualizarLivro, deletarLivro };
