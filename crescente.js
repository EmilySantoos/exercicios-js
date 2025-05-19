//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)e escreve-los em ordem crescente. 
function ordemCrescente() {
  const a = parseInt(readline.question('Digite o primeiro valor: '));
  const b = parseInt(readline.question('Digite o segundo valor: '));
  if (a < b) {
    console.log(`Ordem: ${a}, ${b}`);
  } else {
    console.log(`Ordem: ${b}, ${a}`);
  }
}