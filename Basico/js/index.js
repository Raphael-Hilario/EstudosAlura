
const nome = 'Raphael'
const sobrenome   = 'Hilario';
const idade = '35';
const peso = 78;
const altura = 1.80
let imc = peso/(altura ** 2);
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
let ano = anoAtual - idade; 

console.log(`Nome: ${nome} ${sobrenome} tem ${idade} anos.`);
console.log(`Nasceu em: ${ano}, seu IMC é:${imc}.`);

