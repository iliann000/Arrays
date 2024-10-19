//Multiplicar por 2:

function multiplicarPorDos(Multiplicar) {
  return Multiplicar.map(num => num * 2);
}
const numeros = [1, 2, 3, 4, 5];
const numerosMultiplicados = multiplicarPorDos(numeros);
console.log(numerosMultiplicados); 
