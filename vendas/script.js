// Você é responsável por calcular o total das vendas do dia para uma pequena loja.
// Escreva um programa que peça ao usuário o valor de cada venda, uma por vez.
// Use um laço de repetição para capturar esses valores e adicione-os a um total acumulado.
// O programa deve continuar pedindo valores até que o usuário insira "0" (para finalizar).
// Ao final, exiba o total de vendas do dia.

alert(`--------------------------------------------------------------------
        SEJA BEM-VINDO(A) AO CONTADOR DE VENDAS!
--------------------------------------------------------------------`);

let nome = prompt(`Digite seu nome abaixo: `);

alert(
    `Olá, ${nome}! A seguir você deve digitar o valor de cada vanda feita. Lembre-se de digitar apenas o valor em forma de número
    (Caso deseje colocar um valor "quebrado", use o "." para separar o valor decimal)!
    Caso as vendas terminem, digite o valor "0" para encerrar o programa.`
);

let valorTotal = 0;
let encerrar;

for (; encerrar != 0; ) {
    let valorInserido = Number(prompt(`Digite o valor da venda: `));
    switch (true) {
        case valorInserido == 0:
            encerrar = 0;
            alert(
                `Parece que você encerrou o programa. O total de vendas foi de: R$${valorTotal}.`
            );
            break;
        case valorInserido > 0:
            valorTotal += valorInserido;
            break;
        case isNaN(valorInserido):
            alert(`Valor invalido, tente novamente!`);
            break;
        default:
            alert(`Valor invalido, tente novamente!`);
            break;
    }
}
