let arrayNumeros = [10, 20, 30];

console.log("array inicial", arrayNumeros);
let arrayResultado = arrayNumeros.map((numero,index) => {
  return index+"   "+numero * 2;
});

console.log("nuevo array", arrayResultado);
