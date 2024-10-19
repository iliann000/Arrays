//Invertir un arreglo:

  let nombre = ['Liliana' , 'Pérez' , 'del Ángel'];
  let invertido = [];
  function invertirArreglo() {
    for (let i = nombre.length - 1; i >= 0; i--) {
    invertido.push(nombre[i]);
  }
  console.log(invertido);
}
invertirArreglo(nombre);
  