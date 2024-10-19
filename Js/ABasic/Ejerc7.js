//Eliminar duplicados:

const datos = [7, 8, 9, 1, 2, 8, 9, 9, 3, 4, 9, 7, 3, 8, 9, "Angel", "Lili", "Luis", "Karla", "Luis", "Angel"];

const numerosNuevos= datos.filter((elemento,index) => datos.indexOf(elemento)==index);{
  console.log(numerosNuevos);

};

