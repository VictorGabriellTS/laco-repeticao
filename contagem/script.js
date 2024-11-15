// Escreva um programa que exiba todos os números pares de 1 a 20.
// Utilize um laço for para realizar a contagem. Cada número deve ser exibido em uma linha diferente.
// No final, exiba uma mensagem informando que a contagem foi concluída.

let pares;
let numero = 1;

for (; numero <= 20; numero++) {
    if (numero % 2 == 0) {
        pares = numero;
        console.log(`${pares}`);
    }
}

console.log(`A contagem foi concluída!`);