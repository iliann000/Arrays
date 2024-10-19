//Combina varios arreglos y ordena

const arreglo1 = [5, 2, 9];
const arreglo2 = [1, 6, 8];
const arreglo3 = [3, 7, 4];
console.log(combinarYOrdenar(arreglo1, arreglo2, arreglo3));

function combinarYOrdenar(...arreglos) {
    return arreglos.flat().sort((a, b) => a - b);
}