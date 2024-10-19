//Encontrar el mayor numero

let numeros = [23,34,54,1,23];
let numeroMayor = numeros[0]; 
numeros.forEach(function(numero) {
  if (numero > numeroMayor) {
    numeroMayor = numero;
  }
});

console.log(numeroMayor);
