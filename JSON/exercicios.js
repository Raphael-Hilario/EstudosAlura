//exercicio 1

const livros = [{
        id: 1,
        titulo: 'Biblia',
        autor: 'apostolos',
        anoPublicado: 200
    },
    {
        id: 2,
        titulo: 'Auto da compadecida',
        autor: 'graciliano ramos',
        anoPublicado: 1990
    },
    {
        id: 3,
        titulo: '50 tons de cinza',
        autor: 'não sei',
        anoPublicado: 2015
    },
    {
        id: 4,
        titulo: 'pl/sql',
        autor: 'Eduardo Gonçalves',
        anoPublicado: 2015
    },
]
function encontrarLivroPorId(id) {
    const result = livros.find((busca) => busca.id === id)
    if (result) {
        console.log (result);
    }else
        console.log(`ID ${id} não encontrado.`);

};

//encontrarLivroPorId(6);


//exercicio 2
function filtrarFilmesPorAno(ano) {
    const result = livros.filter((filtro) => filtro.anoPublicado === ano);
    console.log (result);
};

//filtrarFilmesPorAno(2015);

//exercicio 3

const listaProdutos = [{
        id: 1,
        nome: "Camiseta",
        preco: 25.99
    },
    {
        id: 2,
        nome: "Calça Jeans",
        preco: 49.99
    },
    {
        id: 3,
        nome: "Tênis",
        preco: 79.99
    },
    {
        id: 4,
        nome: "Boné",
        preco: 15.99
    }
]

function filtrarOrdenarProdutosPorPreco(maxPreco) {
    const filtrado = listaProdutos.filter((filtro) => filtro.preco <= maxPreco);
    const ordernado = filtrado.sort((a, b) => {
        if (a[filtrado.preco] < b[filtrado.preco]) return - 1;
        if (a[filtrado.preco] > b[filtrado.preco]) return 1;
        return 0;        
    });
    console.log(ordernado);
}

//filtrarOrdenarProdutosPorPreco(30);

//exercicio 4

const animais = [{
        id: 1,
        nome: "Leão",
        especie: "Felino",
        idade: 5
    },
    {
        id: 2,
        nome: "Elefante",
        especie: "Mamífero",
        idade: 10
    },
    {
        id: 3,
        nome: "Pinguim",
        especie: "Ave",
        idade: 3
    }
]

function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

function compararIdadeCresente(a, b) {
    return a.idade - b.idade;
}

function compararIdadeDecresente(a, b) {
    return b.idade - a.idade;   
}

// const animaisOrdenadosCrescente = ordenarAnimais(compararIdadeCresente);
// console.log("Animais ordenados por idade (Crescente):");
// console.log(animaisOrdenadosCrescente);


// const animaisOrdenadosDecrescente = ordenarAnimais(compararIdadeDecresente);
// console.log("\nAnimais ordenados por idade (Decrescente):");
// console.log(animaisOrdenadosDecrescente);

//exercicio 5

const departamentos = [{
        id: 1,
        nome: "Vendas",
        funcionarios: [{
                id: 101,
                nome: "Ana",
                cargo: "Vendedor"
            },
            {
                id: 102,
                nome: "Carlos",
                cargo: "Gerente de vendas"
            }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [{
                id: 201,
                nome: "Maria",
                cargo: "Desenvolvedor"
            },
            {
                id: 202,
                nome: "João",
                cargo: "Analista de sistemas"
            }
        ]
    }
]

function encontrarFuncionarioPorId(id) {
    for (const departamento of departamentos) {
        const funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id === id);
        if (funcionarioEncontrado) {
            return funcionarioEncontrado;
        }
    }
    return null;
}

const funcionarios = encontrarFuncionarioPorId(203);
console.log (funcionarios);