const livro = {
    titulo: String,
    autor: String,
    anoPublicacao: Number,
    genero: String,
}

livro.titulo = "Hermetismo as 7 leis hermeticas";
livro.autor = "Hermes Trimegistro";
livro.anoPublicacao = 1800;
livro.genero = "Auto Ajuda";

console.log(livro);

const anoAtual = new Date().getFullYear();

livro.idadePublicacao = `${anoAtual - livro.anoPublicacao} anos.`;

console.log(livro);

const mostrarDetalhes = livro.idadePublicacao;

console.log(mostrarDetalhes);

console.log(livro["anoPublicacao"]);