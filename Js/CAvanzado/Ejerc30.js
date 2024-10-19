//Combinar objetos de dos arreglos

const arreglo1 = [{ nombre: "Angel" }, { nombre: "Luis" }];
const arreglo2 = [{ edad: 25 }, { edad: 19 }];
console.log(combinarObjetos(arreglo1, arreglo2));

function combinarObjetos(arr1, arr2) {
    return arr1.map((obj, i) => ({ ...obj, ...arr2[i] }));
}