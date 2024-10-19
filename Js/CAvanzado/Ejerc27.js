//Contar ocurrencias de un valor

const valores2 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(contarOcurrencias(valores2, 3)); 

function contarOcurrencias(arr, valor) {
    return arr.reduce((acc, el) => (el === valor ? acc + 1 : acc), 0);
}
