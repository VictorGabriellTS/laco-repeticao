// Você precisa criar um programa que ajude a calcular a média de notas de uma turma.
// O programa deve pedir ao usuário a quantidade de alunos na turma e, em seguida, solicitar a nota de cada aluno.
// Utilize um laço for para capturar as notas e acumular a soma.
// Após inserir todas as notas, o programa deve calcular e exibir a média da turma.

let nome = prompt(`Professor, digite seu nome abaixo: `);

alert(
    `Olá, ${nome}! A seguir você deverá digitar o total de alunos da sala, depois disso você irá digitar a nota de cada aluno.`
);

let totalAlunos = Number(prompt(`Digite o total de alunos na sala: `));
let notaTotal = 0;
let i = 1;

while (isNaN(totalAlunos) == true || totalAlunos <= 0) {
    totalAlunos = Number(prompt("Digite novamente o total de alunos da sala: "))
}

for (; i <= totalAlunos; i++) {
    let nota = Number(prompt(`Digite a nota do ${i}° Aluno(a): `));
    switch (true) {
        case isNaN(nota) == false:
            notaTotal += nota;
            break;
        default:
            nota = Number(
                prompt(`Digite a nota do ${i}° Aluno(a) novamente: `)
            );
            break;
    }
    if (i == totalAlunos) {
        alert(
            `A média da turma foi: ${(notaTotal / totalAlunos).toFixed(2)}`
        );
    }
}