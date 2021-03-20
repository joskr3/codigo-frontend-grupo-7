//Funciones
// ``
function sumar(numero1, numero2) {
  let total = numero1 + numero2;
  let poner_Html = document.write(`<h1>${total}</h1>`);
  return poner_Html;
}

const sumar_dos_valores = function sumar1(numero1, numero2) {
  let total = numero1 + numero2;
  return total;
};

console.log("Mi suma es:", sumar_dos_valores(4, 4));

function restar(numero1, numero2) {
  console.log(numero1 - numero2);
  return numero1 - numero2;
}

const multiplicado = function multiplicar(numero1, numero2) {
  return numero1 * numero2;
};

let y = multiplicado(1, 3);

console.log("Mi multiplicacion es : ", y);

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

function ecu_cuadratica(a, b, c) {
  let discriminante = b ** 2 - 4 * a * c;
  let x = 0;
  if (discriminante > 0) {
    x = -b + (Math.sqrt(discriminante) / 2) * a;
    let escribir_formula = document.write(`
    <div style="display: flex; flex-direction: column;">
        <h1>${x}</h1>
        <p>${a}</p>
        <p>${b}</p>
        <p>${c}</p>
    </div>
    `);
    return escribir_formula;
  } else {
    return "Error, ingresa valores validos";
  }
}

ecu_cuadratica(56, 34, 5);

//recursividad

//bucle - while

let contador = 0;

while (contador < 10) {
  console.log(contador);
  contador++;
}

//funcion recursiva

function recursividad(contador) {
  if (contador >= 10) {
    return;
  }
  //console.log(contador);
  recursividad(contador + 1);
}

//recursividad(9)

//funciones anidadas

function sumarCuadrados(a, b) {
  function cuadrado(x) {
    return x * x;
  }
  return cuadrado(a) + cuadrado(b);
}

console.log(sumarCuadrados(2, 3));

//(a + b)4 = a4 + 4a3b + 6a2b2 + 4ab3 + b4

const binomio_de_newton_4 = function binomio_cuarta(a, b) {
  function suma_cuarta(a, b) {
    return a ** 4 + b ** 4;
  }
  function suma_cubo(a, b) {
    return 4 * (a ** 3 * b) + 4 * (a * b ** 3);
  }
  function multi_cuadrados(a, b) {
    return 6 * (a ** 2 * b ** 2);
  }

  return suma_cuarta(a, b) + suma_cubo(a, b) + multi_cuadrados(a, b);
};

const binomio_de_new = function binomio_cuarta(a, b) {
  function suma_cuarta(a, b) {
    return a ** 4 + b ** 4;
  }
  function suma_cubo(a, b) {
    return 4 * (a ** 3 * b) + 4 * (a * b ** 3);
  }
  function multi_cuadrados(a, b) {
    return 6 * (a ** 2 * b ** 2);
  }

  return suma_cuarta(a, b) + suma_cubo(a, b) + multi_cuadrados(a, b);
};

const binomio_de_newton = function binomio_cuarta(a, b) {
  return (
    a ** 4 +
    b ** 4 +
    4 * (a ** 3 * b) +
    4 * (a * b ** 3) +
    6 * (a ** 2 * b ** 2)
  );
};

console.log(binomio_de_newton_4(2, 3));

function saludo_compuesto(mensaje1, mensaje2) {
  function mostrar_saludo1(mensaje1) {
    return mensaje1;
  }
  function mostrar_saludo2(mensaje2) {
    return mensaje2;
  }
  return mostrar_saludo1(mensaje1) + " " + mostrar_saludo2(mensaje2);
}

console.log(
  saludo_compuesto("Hola , que tal como estas?", "Es un saludo de amistad")
);

//typeof

const mi_peticion_de_servidor = [
  {
    nombre: "nombre1",
    codigo: "34e23a",
    altura: 1.8,
  },
  {
    nombre: "nombre2",
    edad: "22",
    altura: 1.7,
  },
  {
    nombre: "nombre3",
    edad: "45",
    altura: 1.85,
  },
];

// tengo que implementar una funcionalidad donde voy
//a generar un id en base al nombre y la edad multiplicada x2

function generarId(nombre, codigo) {
  console.log(typeof(codigo));
  return nombre + (codigo % 2);
}


//generarId(mi_peticion_de_servidor[0].nombre,mi_peticion_de_servidor[0].edad)
// nombre13423

console.log(
  generarId(mi_peticion_de_servidor[0].nombre, mi_peticion_de_servidor[0].codigo)
);
