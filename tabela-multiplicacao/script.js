// Escreva um programa que peça ao usuário para digitar um número inteiro.
// Em seguida, use um laço for para exibir a tabela de multiplicação desse número de 1 a 10.
// Cada linha deve mostrar o cálculo completo, como "5 x 1 = 5".

let numero = Number(prompt(`Olá, usuário! Digite um número inteiro abaixo:`));
let resultado = `Tabela da multipicação do número ${numero}: \n`;

while (isNaN(numero) == true) {
    numero = Number(prompt(`Valor inválido. Tente novamente: `));
}
for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i} \n`;
}
alert(resultado)