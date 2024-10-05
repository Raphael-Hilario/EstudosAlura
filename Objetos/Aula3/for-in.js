const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999990', '5511999999991'],
    enderecos: [{
            rua: 'Rua Joseph Climber',
            numero: '45',
            complemento: 'apto 43'
        },
        {
            rua: 'Rua Dona Clotilde',
            numero: '71',
            complemento: null
        }
    ]
}

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        const texto = (`A chave ${chave} tem o valor ${estudante[chave]}`)
        console.log(texto);
    } else {
        console.log(`A chave`, chave, `tem o valor`, estudante[chave]);
    }
}