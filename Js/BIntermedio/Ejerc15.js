//Buscar el índice de un elemento

const frutas = ["América", "Canadá", "Amiga", "Guanabana"];
console.log(buscarIndice(frutas, "Amiga"));

function buscarIndice(arr, valor) {
    return arr.indexOf(valor);
}
