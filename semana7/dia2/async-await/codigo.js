//funcion asincrona

async function fun_asincrona() {
  return 23;
}
//funcion flecha  asincrona
const otraFuncion = async () => 42;

//console.log(fun_asincrona());

// fun_asincrona().then((valor) => {
//   console.log("Este es el valor de la promesa", valor);
// });

// const valor = otraFuncion();
// console.log(valor);

// async function obtenerValor() {
//   const value = await otraFuncion();
//   return value;
// }

// console.log(obtenerValor);

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
    return (await a) + b;
  } catch {
    return Error("Hey!!, no es una operacion valida");
  }
};

sumaNum(2, "r").then((valor) => {
  console.log(valor);
});

//con async/await

const binomio = async (a, b) => {
  async function primerFactor() {
    let primerFactor = a ** 2;
    return primerFactor
      ? primerFactor
      : Error("No es una operacion valida-parte1");
  }

  async function segundoFactor() {
    let segundoFactor = 2 * a * b;
    return segundoFactor
      ? segundoFactor
      : Error("No es una operacion valida-parte1");
  }

  async function tercerFactor() {
    let tercerFactor = b ** 2;
    return tercerFactor
      ? tercerFactor
      : Error("No es una operacion valida-parte1");
  }

  const resultado1 = await primerFactor();
  const resultado2 = await segundoFactor();
  const resultado3 = await tercerFactor();

  return `Resultado: ${resultado1 + resultado2 + resultado3}`;
};

console.log(binomio(2, 3));

const mostrarNombres = async (
  primerNombre,
  segundoNombre,
  apellidoPaterno,
  apellidoMaterno
) => {
  async function devolverPrimerNombre() {
    return primerNombre;
  }
  async function devolverSegundoNombre() {
    return segundoNombre;
  }
  async function devolverApellidoPaterno() {
    return apellidoPaterno;
  }
  async function devolverApellidoMaterno() {
    return apellidoMaterno;
  }
  const pNomb = await devolverPrimerNombre();
  const sNomb = await devolverSegundoNombre();
  const apPat = await devolverApellidoPaterno();
  const apMat = await devolverApellidoMaterno();

  return `Mi nombre es : ${pNomb} ${sNomb} ${apPat} ${apMat}`;
};

// mostrarNombres("Josue", "Patricio", "Retamozo", "Vargas"
// );
console.log(
  mostrarNombres("Josue", "Patricio", "Retamozo", "Vargas").then((nombre) => {
    console.log(nombre);
  })
);
