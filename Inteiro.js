//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
function repetirNumero() {
  const numero = parseInt(readline.question('Digite um número: '));
  for (let i = 0; i < 10; i++) {
    console.log(numero);
  }
}