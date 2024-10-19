//Plana un arreglo anidado

const anidado = [1, [2, 3], [4, [5, 6]], 7];
console.log(aplanarArreglo(anidado));

function aplanarArreglo(arreglo) {
    return arreglo.flat();
}