//Reemplazar valores en un arreglo

const numeros = [-1, 2, -3, 4, -5];
console.log(reemplazarNegativos(numeros)); 
function reemplazarNegativos(arr) {
    return arr.map(num => num < 0 ? Math.abs(num) : num);
}