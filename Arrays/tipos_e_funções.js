const a = 1;
const b = "1";
const c = a + b;
const idadeMinima = 18;
const idadeCliente = 18;

//ternario
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");

//funções
function imprime(string) {
    console.log(string);
}


function soma(number1, number2) {

    return number1 + number2;
}

imprime(soma(5, 123));

function comParametro(param) {
    console.log(param)
}
comParametro()


// expressão de função
const soma2 = function (n1, n2) {
    return n1 + n2
};

console.log(soma2(1, 2));

//arrow function
const apresentarArrow = nome => `meu nome é ${nome}`
const soma3 = (n1, n2) => n1 + n2;
console.log(apresentarArrow('Rapha'));
console.log(soma3(45, -5));