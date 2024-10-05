const animaisImport = require('./animais.json');

//console.log(animais);
//const animaisString = JSON.stringify(animais);
const animaisJson = JSON.parse(animaisImport);

let animais = {
    animaisJson
}

//animais.push = [id = 4, nome = 'Macaco', tipo = 'Mamifero', habitat = 'Floresta'];

console.log(animais);
//console.log(animaisJson);