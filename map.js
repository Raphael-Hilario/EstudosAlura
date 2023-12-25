const notas = [10, 9.5, 8, 7, 6];

notasAtualizadas = notas.map((nota) => {

    return (nota + 1) >= 10 ? nota = 10 : nota + 1;
})

console.log(notas);
console.log(notasAtualizadas);