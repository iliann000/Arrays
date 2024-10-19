//Agrupar por edades

function agruparPorEdades(arr) {
    return arr.reduce((acc, persona) => {
        let decada = Math.floor(persona.edad / 10) * 10 + 's';
        if (!acc[decada]) acc[decada] = [];
        acc[decada].push(persona);
        return acc;
    }, {
        
    });
}

const personas2 = [
    { nombre: "Luis", edad: 19 },
    { nombre: "Susan", edad: 9 },
    { nombre: "Harry", edad: 35 },
    { nombre: "Pinki", edad: 22 }
];
console.log(agruparPorEdades(personas2)); 
