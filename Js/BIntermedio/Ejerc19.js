//Suma acumulada

const numeros4 = [1, 2, 3, 4, 5];
console.log(sumaAcumulada(numeros4));
function sumaAcumulada(suma) {
    return suma.reduce((acumulada, num) => acumulada + num, 0);
}


