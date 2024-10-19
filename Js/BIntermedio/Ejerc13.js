//Palabras más largas que "n" letras

const palabras = ["melón", "banana", "kiwi", "pera"];
console.log(palabrasMasLargasQue(palabras, 4));

function palabrasMasLargasQue(palab, n) {
    return palab.filter(palabra => palabra.length > n);
}