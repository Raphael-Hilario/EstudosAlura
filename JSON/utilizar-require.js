const dados = require('./dados.json');

//console.log(dados.usuarios);
const converteString = JSON.stringify(dados);
const convertJs = JSON.parse(converteString);

console.log(converteString);
console.log(convertJs);