//Comprobar si un arreglo está vacío

const vacio = [];
console.log(estaVacio(vacio));

function estaVacio(arreglo) {
    return arreglo.length === 0;
}