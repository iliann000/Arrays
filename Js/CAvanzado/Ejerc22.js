//Eliminar falsy values

const valores = [0, "Elimina falsy values", false, "", undefined, 45, null, "si!! elimina"];
console.log(eliminarFalsy(valores));

function eliminarFalsy(Eliminar) {
    return Eliminar.filter(Boolean);
}