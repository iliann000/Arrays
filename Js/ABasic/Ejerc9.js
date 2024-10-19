//Filtrar números par:

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16];
const numerosPar = mostrarNumerosPar(numeros);
function mostrarNumerosPar(numero) {

  console.log (numero.filter(num => num % 2 === 0));
}
