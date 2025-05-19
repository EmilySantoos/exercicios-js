//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
function menuInterativo() {
  console.log('1 - Ver saudação');
  console.log('2 - Ver data atual');
  console.log('3 - Sair');
  const opcao = readline.question('Escolha uma opção: ');
  switch (opcao) {
    case '1':
      console.log('Olá, usuário!');
      break;
    case '2':
      console.log(new Date().toLocaleString());
      break;
    case '3':
      console.log('Saindo...');
      break;
    default:
      console.log('Opção inválida');
  }
}