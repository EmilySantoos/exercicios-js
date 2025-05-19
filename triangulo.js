//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
function tipoTriangulo() {
  const A = parseFloat(readline.question('Digite o lado A: '));
  const B = parseFloat(readline.question('Digite o lado B: '));
  const C = parseFloat(readline.question('Digite o lado C: '));

  if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
      console.log('Triângulo Equilátero');
    } else if (A === B || A === C || B === C) {
      console.log('Triângulo Isósceles');
    } else {
      console.log('Triângulo Escaleno');
    }
  } else {
    console.log('Os lados fornecidos não formam um triângulo.');
  }
}