//Ordenar números

const numeros = [55, 30, 82, 16, 200];
console.log(ordenarNumeros(numeros)); 
function ordenarNumeros(orden) {
    return orden.sort((a, b) => a - b);
}