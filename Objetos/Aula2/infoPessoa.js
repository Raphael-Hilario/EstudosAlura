const pessoa = {
    nome: 'Raphael',
    idade: 35,
    solteiro: true,
    hobbies: ['Tocar violão', 'Jogar Video Game'],
    mostrarInfoPessoa: function (params) {
        return this;
    }
}

//console.log(pessoa.mostrarInfoPessoa(pessoa));

pessoa.endereco = {
    rua: 'Masao Miura',
    cidade: 'Osasco',
    estado: 'SP'
}

//console.log(pessoa.mostrarInfoPessoa(pessoa));

const pessoas = {
    listaPessoas: [{
            nome: 'Raphael',
            idade: 35,
            cidade: 'Osasco'
        },

        {
            nome: 'Naylunna',
            idade: 33,
            cidade: 'Rio de Janeiro'
        },

        {
            nome: 'Vivi',
            idade: 34,
            cidade: 'Guarulhos'
        }
    ],
    listaPessoas2: [{
            nome: 'Luna',
            idade: 35,
            cidade: 'Osasco'
        },

        {
            nome: 'Operador',
            idade: 33,
            cidade: 'Rio de Janeiro'
        },

        {
            nome: 'Érico',
            idade: 34,
            cidade: 'Guarulhos'
        }
    ],
    imprimeLista: function (nomeLista) {
        return this[nomeLista];
    },
    filtrarCidade: function (objeto, nomeLista, cidade) {
        return objeto[nomeLista].filter(filtro => filtro.cidade === cidade);
    }
};

//console.log(pessoas.imprimeLista(pessoas));

pessoas.listaPessoas.push({
    nome: 'Manoel',
    idade: 50,
    cidade: 'São Paulo'
});

console.log(pessoas.imprimeLista('listaPessoas'));

console.log(pessoas.imprimeLista('listaPessoas2'));

console.log(pessoas.filtrarCidade(pessoas, 'listaPessoas2', 'Guarulhos'));

console.log(pessoas.filtrarCidade(pessoas, 'listaPessoas', 'Guarulhos'));