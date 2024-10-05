const calculadora = {
    soma: function (numero1, numero2) {
        return console.log(`Resultado da soma é ${numero1 + numero2}`);
    },
    subtracao: function (numero1, numero2) {
        return console.log(`Resultado da subtração é ${numero1 - numero2}`);
    },
    multiplicacao: function (numero1, numero2) {
        return console.log(`Resultado da multiplicação é ${numero1 * numero2}`);
    },
    divisao: function (numero1, numero2) {
        if (numero1 === 0 || numero2 === 0) {
            return console.log(`Não é possivel fazer a divisão por zero`);
        } else
            return console.log(`Resultado da divisão é ${numero1 / numero2}`);
    },
    calcularMedia: function (numeros) {
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        return console.log(`A média é ${soma / numeros.length}`);
    }
};

calculadora.soma(5, 4);
calculadora.subtracao(10, 9);
calculadora.multiplicacao(5, 5);
calculadora.divisao(1, 2);
const numerosParaMedia = [10, 8, 6, 9, 7];
calculadora.calcularMedia(numerosParaMedia);