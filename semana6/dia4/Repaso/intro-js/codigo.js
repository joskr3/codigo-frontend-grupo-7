//JS

// lenguaje de programacion funcional , usado  principalmente para la web

//  es de tipado dinamico

// se puede usar tanto para frontend como backend

//Frameworks de diseño de interfaces como ReactJS , usan JS como lenguaje

// variables

// su uso para valores que cambiaran con el tiempo , por jemplo: fecha de cumpleños
// dias del año , etc

// antes se usaba var

let variable_texto = "cadena de texto(string)";

let variable_numerica_entera = 0;

let variable_numerica_decimal = 6.5; //float

let variable_booleana_verdadera = true;

let variable_booleana_falsa = false;

// arrays , funciones, objetos

let variable_array = [1, 2, 3, 4];

let variable_funcion = function sumar(a, b) {
  return a + b;
};

let variable_objeto = {
  propiedad1: "cadena_de_texto",
  propiedad2: 0,
  propiedad3: {
    subpropiedad1: "cadena_de_texto",
    subpropiedad2: 3,
  },
  propiedad4: false,
};

// constantes

// para valores que se asiganaran una unica vez y ya no volveran a cambiar

// por ejemplo : nombre , cuidad de nacimiento, fecha de cumpleaños, etc.

const miNombre = "Mi nombre no cambiara con el tiempo";

const miFechaCumple = new Date("June 12 1990");

//const diaActual = new Date();

let diaActual = new Date();

//operaciones aritmeticas
// y modulo(el resto de una division) %
// + , - , * , /
// sumar , restar , multiplicar y dividir

let suma = 4 + 5;

let resta = 6 - 3;

let multiplicacion = 8 * 9;

let division = 100 / 4;

let modulo = 6 % 2;

//let precedencia_aritmetica = ((a + b * c) / d) ** 2;

// CONDICIONALES- if-else if- else , switch case

// evaluan una condicion y dependiendo del relsultado (si es true o false )
// ejecutan cierto codigo

let a = 25;

if (a === 25) {
  console.log("LOs numeros son iguales");
} else if (a === 34) {
  console.log("No equivale a 34");
} else {
  console.log("Comparacion no valida");
}

//operadores ternarios

let nombre = "Josue";

let evuluaCondicion =
  nombre === "Josue" ? "Si se llama asi" : "Hey!, te equivocaste de nombre";

let numero = 3;

let evaluaNumeroMagico =
  numero === 4
    ? "hey ! lo encontraste"
    : numero === 5
    ? "efectivamente es el 5"
    : "sigue intentando";

if (numero === 4) {
  console.log("hey ! lo encontraste");
}

if (numero === 5) {
  console.log("hey ! encontraste al 5");
} else {
  console.log("Sigue intentando");
}

// switch-case

let numeroParoImpar = 4;

switch (numeroParoImpar) {
  case 4:
    console.log("Numero par");
    break;
  case 5:
    console.log("Numero impar");
    break;
  case 8:
    console.log("Numero par");
    break;
  case 15:
    console.log("Numero impar");
    break;
  case 24:
    console.log("Numero par");
    break;
  case 35:
    console.log("Numero impar");
    break;
  default:
    console.log("Lo siento , no conocemos ese numero");
}

//ARREGLOS

let arrayDeNumeros = [1, 2, 3, 4, 5];

let arrayDeNombres = ["Marco", "Polo", "Raul", "Andrea", "Jimena"];

let arrayDeUsuarios = [
  { nombre: "Paul", edad: 21, colorFav: "verde" },
  { nombre: "Marie", edad: 31, colorFav: "azul" },
  { nombre: "Jhon", edad: 16, colorFav: "rojo" },
  { nombre: "Carla", edad: 51, colorFav: "dorado" },
  { nombre: "Paula", edad: 11, colorFav: "verde" },
  { nombre: "Mario", edad: 41, colorFav: "azul" },
  { nombre: "Jhoana", edad: 9, colorFav: "rojo" },
  { nombre: "Carlos", edad: 41, colorFav: "dorado" },
  { nombre: "Paulina", edad: 2, colorFav: "verde" },
  { nombre: "Marcos", edad: 65, colorFav: "azul" },
  { nombre: "Jhonatan", edad: 11, colorFav: "rojo" },
  { nombre: "Jimena", edad: 71, colorFav: "dorado" },
];

let elemento = arrayDeUsuarios[0].nombre;

// for (elemento in arrayDeUsuarios) {
//   console.log(elemento);
// }

// for (let i = 0; i < arrayDeUsuarios.length; i++) {
//   console.log(arrayDeUsuarios[i]);
// }

// van a clasifica en tres grupos

// aquellos a los les gusta el color rojo o verde o dorado y mayores de 15 años
// aquellos a los les gusta el color rojo o verde o dorado y menores de 50 años
// devolver en un objeto , los resultados , objeto de nombres, objeto edades, objeto colores

let colores = {
  azul: 0,
  verde: 0,
  rojo: 0,
  dorado: 0,
};

let edades = {
  menorOigualA15: 0,
  mayorOigualA50: 0,
};

let resultadosFinales = {
  resultado1: 0,
  resultado2: 0,
  resultado3: 0,
  resultado4: 0,
  resultado5: 0,
  resultado6: 0,
};

let totalUsuarios = 0;

for (usuario in arrayDeUsuarios) {

  switch (arrayDeUsuarios[usuario].colorFav) {
    case "azul":  
      colores.azul++;
      if (arrayDeUsuarios[usuario].edad <= 15) {
        edades.menorOigualA15++;
        resultadosFinales.resultado1++;
      } else if (arrayDeUsuarios[usuario].edad >= 50) {
        edades.mayorOigualA50++;
        resultadosFinales.resultado2++;
      }
      break;
    case "verde":
      colores.verde++;
      if (arrayDeUsuarios[usuario].edad<= 15) {
        edades.menorOigualA15++;
        resultadosFinales.resultado1++;
      } else if (arrayDeUsuarios[usuario].edad >= 50) {
        edades.mayorOigualA50++;
        resultadosFinales.resultado2++;
      }
      break;
    case "rojo":
      colores.rojo++;
      if (arrayDeUsuarios[usuario].edad <= 15) {
        edades.menorOigualA15++;
        resultadosFinales.resultado3++;
      } else if (arrayDeUsuarios[usuario].edad>= 50) {
        edades.mayorOigualA50++;
        resultadosFinales.resultado4++;
      }
      break;
    case "dorado":
      colores.dorado++;
      if (arrayDeUsuarios[usuario].edad <= 15) {
        edades.menorOigualA15++;
        resultadosFinales.resultado5++;
      } else if (arrayDeUsuarios[usuario].edad >= 50) {
        edades.mayorOigualA50++;
        resultadosFinales.resultado6++;
      }
      break;
    default:
       // console.log("NO esta entrando a la condicion")
      break;
  }
  totalUsuarios++;
}

let opcion1 = `Hay ${resultadosFinales.resultado1} personas a las que les gusta el color azul y tienen hasta 15 años`;
let opcion2 = `Hay ${resultadosFinales.resultado2} personas a las que les gusta el color azul y tienen menos de 50 años`;
let opcion3 = `Hay ${resultadosFinales.resultado3} personas a las que les gusta el color azul y tienen hasta 15 años`;

let opcion4 = `Hay ${resultadosFinales.resultado4} personas a las que les gusta el color azul y tienen menos de 50 años`;
let opcion5 = `Hay ${resultadosFinales.resultado5} personas a las que les gusta el color azul y tienen hasta 15 años`;
let opcion6 = `Hay ${resultadosFinales.resultado6} personas a las que les gusta el color azul y tienen menos de 50 años`;

console.log(opcion1);
console.log(opcion2);
console.log(opcion3);
console.log(opcion4);
console.log(opcion5);
console.log(opcion5);


console.log(totalUsuarios,"Total de usuarios")
console.log(`Hay ${colores.azul} personas  a las que les  gusta el color azul`);
console.log(`Hay ${edades.menorOigualA15} menores de edad`)
