//push
//pop
const notas = [10, 6, 8, 5.5, 10];

notas.push(7);
notas.pop();
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

//console.log(media);
//console.log(notas);

//slice
const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjore', 'Guilherme', 'Aline', 'Fabiana',
    'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'
];

const alunosMetade2 = alunos.slice(alunos.length / 2);
const alunosMetade1 = alunos.slice(0, alunos.length / 2);

//console.log(alunosMetade1);
//console.log(alunosMetade2);


//splice
const chamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjore', 'Leo'];
//chamada.splice(1, 2);
//chamada.push('Rodrigo');
//chamada.splice(1, 2, 'Rodrigo');
//console.log(chamada);

//concat
const salaJS = ['Evaldo', 'Camis', 'Mari'];
const salaPython = ['Ju', 'Leo', 'Raquel'];

const salaUnida = salaJS.concat(salaPython);

//console.log(salaUnida);

const lista1 = ['João', 'Juliana', 'Caio', 'Ana'];
const lista2 = [10, 8, 7.5, 9];

const lista3 = [lista1, lista2];

//console.log(lista3);
//console.log(`A nota do ${lista3[0][1]} é ${lista3[1][1]}`);

function buscaAluno(nome) {
    //const alunos = lista3[0];
    //const medias = lista3[1]
    const [alunos, medias] = lista3;
    if (alunos.includes(nome)) {

        const indice = alunos.indexOf(nome);

        const nota = medias[indice];

        console.log(`${nome} é aluno e sua média é ${nota}`);

    } else {
        console.log(`${nome} não é aluno`);
    }
}


buscaAluno("João");