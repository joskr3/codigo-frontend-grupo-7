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

// let sumar = function (x, y) {
//   return new Promise((resolve, reject) => {
//     let suma = x + y;
//     if (suma) {
//       resolve(suma);
//     } else {
//       reject(Error("Hey!!, no es una suma valida"));
//     }
//   });
// };

let sumar = (x, y) => {
  return new Promise((resolve, reject) => {
    let suma = x + y;
    if (suma) {
      resolve(suma);
    } else {
      reject(Error("Hey!!, no es una operacion valida"));
    }
  });
};

let restar = (x, y) => {
  return new Promise((resolve, reject) => {
    let resta = x - y;
    if (resta) {
      resolve(resta);
    } else {
      reject(Error("Hey!!, no es una operacion valida"));
    }
  });
};
let multiplicar = (x, y) => {
  return new Promise((resolve, reject) => {
    let multiplicacion = x * y;
    if (multiplicacion) {
      resolve(multiplicacion);
    } else {
      reject(Error("Hey!!, no es una operacion valida"));
    }
  });
};

let dividir = (x, y) => {
  return new Promise((resolve, reject) => {
    let multiplicacion = x / y;
    if (multiplicacion) {
      resolve(multiplicacion);
    } else {
      reject(Error("Hey!!, no es una operacion valida"));
    }
  });
};

sumar(2, 2)
  .then((resultadoSuma) => {
    return restar(resultadoSuma, 4);
  })
  .then((resultadoResta) => {
    return sumar(resultadoResta, 7);
  })
  .catch((error) => {
    return error;
  });
