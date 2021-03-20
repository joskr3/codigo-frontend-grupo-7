//
//scope - espacio dispnible que esta entre llaves {}
// function ejemplo() {
//   let texto = "texto inicial";

//   function mostrarTexto() {
//     alert(texto);
//     return;
//   }
//   mostrarTexto();
// }

// ejemplo();

// function crearFuncion() {
//   let nombre = "Pablo";

//   function mostrarNombre() {
//     // scope: el espacio disponible para poner codigo dentro de mi funcion
//     alert(nombre);
//     return;
//   }
//   //   mostrarNombre()
//   //   return ;
//   return mostrarNombre;
// }

// let llamarMiFuncion = crearFuncion();
// llamarMiFuncion();

//crearFuncion()

function sumadoraDeNumeros(x) {
  //devuelve una funcion anonima(sin nombre)
  return function (y) {
    // a su vez esta funcion anonima devuelve una suma
    return x * y;
  };
}
//let suma5 = sumadoraDeNumeros(5);
let suma10 = sumadoraDeNumeros(10);
//console.log(suma5)
console.log(suma10);
//console.log(suma5(2));
let suma10y35 = suma10(35);
console.log(suma10y35);

function generadoraDeSaludos(saludoInicial) {
  return function (saludoSecundario) {
    return saludoInicial + ", " + saludoSecundario;
  };
}

let saludo_mañanero_primera_parte = generadoraDeSaludos("Hola buenos dias!!!");

let saludo_mañanero_completo = saludo_mañanero_primera_parte(
  "Que tal ? mucho gusto"
);

console.log(saludo_mañanero_completo);
