//Transforma un arreglo de objetos

function transformarArregloDeObjetos(arreglo) {
    return arreglo.map(obj => obj.nombre);
}

const personas = [
    { nombre: "Luis", edad: 19 },
    { nombre: "Dominguez", edad: 30 },
    { nombre: "Pedro", edad: 35 }
];
console.log(transformarArregloDeObjetos(personas)); 
