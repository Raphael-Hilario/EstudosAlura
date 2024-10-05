const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11222333440", "1144455660"],
};

cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}];

cliente.enderecos.push({
    rua: "Joseph Ladder",
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === false
);
//console.log(cliente.enderecos);
console.log(listaApenasApartamentos);
//console.log(cliente);