//exercicio 1
const pessoa = {
    nome: "Raphael Hilario",
    notas: [8, 8.5, 9, 8],
    calcularMediaNotas: function () {
        const somaDasNotas = this.notas.reduce((acc, nota) => acc + nota, 0);
        const media = somaDasNotas / this.notas.length;
        return media.toFixed(2);
    },
    classificaDesempenho: function () {
        const media = this.calcularMediaNotas();

        if (media >= 9) {
            return 'Desempenho excelente';
        } else if (media >= 7.5 && media < 9) {
            return 'Bom desempenho';
        } else if (media >= 6 && media < 7.5) {
            return 'Desempenho regular'
        } else {
            return 'Desempenho insuficiente'
        }
    }
}

const exibirMedia = pessoa.calcularMediaNotas();
console.log(`${pessoa.nome} obteve a média ${exibirMedia}.`);

const categoriaDesempenho = pessoa.classificaDesempenho();
console.log(`${pessoa.nome} possui: ${categoriaDesempenho}`);


//exercicio 2
const carro = {
    marca: 'Renault',
    modelo: 'Clio',
    ano: 2008,
    cor: "verde",
    chasi: "XXXXXXXXXXXXXX"
}

for (let info in carro) {
    console.log(`A chave ${info} possui o valor ${carro[info]}`);
}

