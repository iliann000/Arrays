// Los números son mayores que n

const numeros2 = [6, 7, 8, 9, 10];
console.log(todosMayoresQue(numeros2, 5));

function todosMayoresQue(numeros, n) {
    return numeros.every(num => num > n);
}


