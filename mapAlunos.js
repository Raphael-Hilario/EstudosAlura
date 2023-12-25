const alunos = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesAtualizados = alunos.map((nomes) => nomes.toUpperCase());

console.log(nomesAtualizados);

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
notas.forEach(function (nota) {
    somaDasNotas += nota;

})
console.log(somaDasNotas);