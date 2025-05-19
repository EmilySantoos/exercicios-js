//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
function fatorial() {
  const num = parseInt(readline.question('Digite um número inteiro: '));
  let resultado = 1;
  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }
  console.log(`Fatorial de ${num} é ${resultado}`);
}