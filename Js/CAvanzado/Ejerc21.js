//Crear un arreglo a partir de un string

const texto = "Mi nombre es Liliana";
console.log(crearArregloDesdeString(texto));

function crearArregloDesdeString(cadena) {
    return cadena.split(' ');
}