console.log("Hola mundo");

console.log(1 * 2);

let condicion = true;

if (condicion === true) {
  console.log("Esto se ejecuta si mi conficion es verdadera");
} else {
  console.log("Esto se ejecuta si mi condicion es falsa");
}

let palabra = "";

if (palabra === "palabra1") {
  console.log("imprime palabra 1 si la comparacion es verdadera");
} else if (palabra === "palabra 2") {
  console.log("imprime palabra 2 si la comparacion es verdadera");
} else if (palabra === "palabra2") {
  console.log("imprime palabra 2 si la comparacion es verdadera");
} else if (palabra === "palabra1") {
  console.log("imprime palabra 2 si la comparacion es verdadera");
} else {
  console.log(
    "imprime palabra por defecto si ninguna de las comparaciones es verdadera"
  );
}

let cancion = "la la la";

switch (cancion) {
  case "cancion1":
    console.log("esta es la cancion 1");
    for (let pasos = 0; pasos < 10; pasos++) {
      console.log("camina defrente");
    }
    break;
  case "cancion2":
    console.log("esta es la cancion 2");
    break;
  case "cancion3":
    console.log("esta es la cancion 3");
    break;
  case "cancion4":
    console.log("esta es la cancion 4");
    break;
  case "cancion5":
    console.log("esta es la cancion 5");
    break;
  default:
    for (let pasos = 0; pasos < 10; pasos++) {
      console.log("camina defrente");
    }
    console.log("no seleccionaste nunguna cancion");
}

// FOR

for (let pasos = 0; pasos < 10; pasos++) {
  console.log("camina defrente");
}

console.log("camina defrente");
console.log("camina defrente");
console.log("camina defrente");
console.log("camina defrente");
console.log("camina defrente");
console.log("camina defrente");
console.log("camina defrente");
console.log("camina defrente");
console.log("camina defrente");
console.log("camina defrente");
console.log("camina defrente");
console.log("camina defrente");

// && y logico, me sirve para unir dos condiciones
// || o logico , me sirve para escoger entre dos valores

// % me sirve para obtener el resto de una division

// voy a imprimir todos los numeros pares(empezando en 0) que sean menor a 300 usando for

for (let numero = 0; numero < 300; numero += 2) {
  console.log(numero);
}

// voy a imprimir todos los numeros divisibles(que cuando lo divido con el nuemro que deseo , me da 0n en el resto) entre 3 o 5 o 7 , hasta que llegue al numero 1000

for (let numero = 0; numero < 1000; numero++) {
  if (numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
    console.log(numero);
  }
}

// vamos a listar/ mostrar todos los numeros menores a 10 que sean multiplos de 3 o 5 , esto significa que tendremos al 3,5,6 y al 9 y que su suma es 23

// vamos a hacer esto pero con todos los numeros que sean menores a 1000

// let total = 0;

// for (let numero = 0 ; numero < 1000; numero++){
//     if(numero % 3 === 0 || numero % 5 === 0){
//         total += numero // total = total + numero
//     }
// }

// console.log(total)

let total = 0;

let numero = 0;

while (numero < 1000) {
  if (numero % 3 === 0 || numero % 5 === 0) {
    total += numero; // total = total + numero
  }
  numero++;
}

console.log(total)



//while(mientras)

// hace lo mismo que el for(itera/recorre) , pero yo uso for cuando conozco la cantidad de elementos que voy a recorrer
// y uso while cuando no conozco la cantidad de elemntos que voy a recorrer

let contador = 10;

while (contador >= 0) {
  console.log(contador);
  contador--; //aumenta de uno en uno -> contador = contador + 1  , -> contador = contador - 1
}
