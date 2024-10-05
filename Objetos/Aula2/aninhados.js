const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11222333440", "1144455660"],
};

console.log(cliente);

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

console.log(cliente);
console.log(cliente.endereco.rua);