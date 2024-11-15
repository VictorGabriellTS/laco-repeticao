// Crie um programa que peça ao usuário para digitar uma senha.
// Continue pedindo a senha até que o usuário digite "1234".
// Use um laço do…while para controlar as tentativas e, quando a senha correta for inserida,
// exiba a mensagem "Acesso Permitido".

alert(
    `Olá, usuário! Que tal brincarmos de adivinhar a senha?! Você vai digitar uma senha aleatória e caso acertar você ganha um prêmio.`
);

let senha = prompt(`Vamos lá! Digite uma senha abaixo: `);
let dicaCount = 0;
let i = 0;

do {
    switch (senha) {
        case "1234":
            i = 1;
            break;
        default:
            senha = prompt(
                `Parece que você errou, tente novamente. Digite a senha abaixo: `
            );
    }
    switch (dicaCount) {
        case 5:
            alert(
                `Você ainda não acertou, então aí vai uma dica: A senha só contem números.`
            );
            senha = prompt(
                `Vamos lá, com essa dica deve ter ficado mais fácil! Digite novamente a senha abaixo:`
            );
            break;
        case 15:
            alert(
                `Você ainda não acertou, então aí vai mais uma dica: A senha possui 4 caracteres.`
            );
            senha = prompt(
                `Vamos lá, com essa dica deve ter ficado mais fácil! Digite novamente a senha abaixo:`
            );
            break;
    }
    dicaCount++;
} while (i == 0);

if (senha == "1234") {
    alert(`Você acertou a senha! Pegue seu prêmio abaixo: ♥`);
}
