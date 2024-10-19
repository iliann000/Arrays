//Algunos números son pares

const numeros3 = [1, 3, 5, 7, 8];
console.log(algunosSonPares(numeros3));
function algunosSonPares(par) {
    return par.some(num => num % 2 === 0);
}


