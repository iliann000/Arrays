//Producto de todos los elementos

const numeros5 = [1, 2, 3, 4, 5];
console.log(productoDeTodos(numeros5));
function productoDeTodos(arr) {
    return arr.reduce((acc, num) => acc * num, 1);
}


