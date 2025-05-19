//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
function somarCincoNumeros() {
  let soma = 0;
  for (let i = 1; i <= 5; i++) {
    const num = parseFloat(readline.question(`Digite o número ${i}: `));
    soma += num;
  }
  console.log(`Soma total: ${soma}`);
}