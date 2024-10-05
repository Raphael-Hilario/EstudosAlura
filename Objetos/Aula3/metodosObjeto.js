let carro = {
    marca: 'Renault',
    modelo: 'Clio',
    ano: 2008,
    cor: "verde",
    ligado: false,
    ligar: function () {
        if (this.ligado) {
            return console.log("O carro já está ligado não é possível efetuar essa ação");
        }else {
        this.ligado = true;
        return console.log("Você ligou o carro com sucesso");
        }
    },
    desligar: function () {
        if (!this.ligado) {
            return console.log("O carro já está desligado não é possível efetuar essa ação");
        } else {
            this.ligado = false;
            return console.log("Você desligou o carro com sucesso");
        }
    },
    obterDetalhes: function () {
        const estado = this.ligado ? 'ligado' : 'desligado';
        return console.log(`Detalhes do carro:\nMarca: ${this.marca}
                            \nModelo: ${this.modelo}
                            \nAno: ${this.ano}
                            \nCor: ${this.cor}
                            \nStatus: ${estado}`);
    },
    placa: 'XXX9999',
}

Object.defineProperty(carro, "placa", { enumerable: false })

// const ligarCarro = carro.ligar();
// const ligarCarro1 = carro.ligar();
// const desligarCarro = carro.desligar();
// const desligarCarro1 = carro.desligar();
// const ligarCarro2 = carro.ligar();
// const exibirDetalhes = carro.obterDetalhes();

for (let chaves in carro) {
    //console.log(`A chave ${chaves} possui o valor ${carro[chaves]}`); 
}

imprimeInfoObjectKeys = Object.keys(carro);
//console.log('info via Object Keys', imprimeInfoObjectKeys);

imprimeInfoCarro = carro.placa;
console.log('info via carro.placa', imprimeInfoCarro);

//exercicio 5

const carroNovo = {
    marca: "Volksvagem",
    modelo: "FOX",
    ano: 2010,
    cor: "prata"
}

const carroComNovosDetalhes = { ...carro, ...carroNovo }

console.log('Carro com novos detalhes:');
console.log(carroComNovosDetalhes);

carroComNovosDetalhes.modelo = "Accord";

console.log('/nCarro com detalhes modificados');
console.log(carroComNovosDetalhes);

module.exports = ligarCarro;