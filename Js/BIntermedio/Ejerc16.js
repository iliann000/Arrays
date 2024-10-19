//Encontrar un elemento específico

const personas = [
    { nombre: "Luis", edad: 19 },
    { nombre: "Angel", edad: 26 },
    { nombre: "Alberto", edad: 35 }
];
function encontrarElemento(elemento, propiedad, valor) {
    return elemento.find(obj => obj[propiedad] === valor);
}

console.log(encontrarElemento(personas, "nombre", "Luis"));
