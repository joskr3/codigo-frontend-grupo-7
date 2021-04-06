//funcion asincrona

async function fun_asincrona() {
  return 23;
}
//funcion flecha  asincrona
const otraFuncion = async () => 42;

//console.log(fun_asincrona());

fun_asincrona().then((valor) => {
  console.log("Este es el valor de la promesa", valor);
});

const valor = otraFuncion();
console.log(valor);

async function obtenerValor() {
  const value = await otraFuncion();
  return value;
}

console.log(obtenerValor);

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

const sumaNum = async (a, b) => {
  try {
    return await a + b;
  } catch {
    return Error("Hey!!, no es una operacion valida");
  }
};

sumaNum(2, "r").then((valor) => {
  console.log(valor);
});
