const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999990', '5511999999991'],
    // enderecos: [{
    //         rua: 'Rua Joseph Climber',
    //         numero: '45',
    //         complemento: 'apto 43'
    //     },
    //     {
    //         rua: 'Rua Dona Clotilde',
    //         numero: '71',
    //         complemento: null
    //     }
    // ]
}

const chavesObjetos = Object.values(estudante);
console.log(chavesObjetos);

if (chavesObjetos.includes('JavaScript')) {
    console.error('achei');
}