const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);
const nomesAtualizados = [...meuSet];
//const nomesAtualizados = new Set([...nomes]); opicional forma mais rapida

console.log(meuSet);
console.log(nomesAtualizados);