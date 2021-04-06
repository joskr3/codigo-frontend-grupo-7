// let promesa = new Promise((resolve, reject) => {
//   //ejecutar allgoritmo....

//   if (condicion) {
//     resolve("haz algo aca");
//   } else {
//     reject("no funciono");
//   }
// });

//las promesas tienen tres estados

//1.pendiente
//2.fue resuelta(se cumplio)
//3. fue rechazada(no se cumplio)

let sumar = function (x, y) {
  return new Promise((resolve, reject) => {
    let suma = x + y;
    if (suma) {
      resolve(suma);
    } else {
      reject(Error("Hey!!, no es una suma valida"));
    }
  });
};

console.log(sumar(2, 4));

// let sumar = (x, y) => {
//   return new Promise((resolve, reject) => {
//     let suma = x + y;
//     if (suma) {
//       resolve(suma);
//     } else {
//       reject(Error("Hey!!, no es una suma valida"));
//     }
//   });
// };
