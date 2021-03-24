// cadenas de texto(strings)

//cada letra, numero , simbolo que vaya dentro unas comillas(simples,dobles,invertidas) , se considera un caracter
//y una secuencia de caracteres es una cadena de texto

//esta es la manera primitiva(basica) de crear cadenas de texto
const cadenaDeTexto = "Esta es una cadena de caracteres";

let otraCadenaDeTexto = "Esta es otra cadena de texto";

const otraCadenaDeTextoObjeto = new String(
  "Esta es una cadena de texto pero creada a partir de un objeto de tipo string"
);

console.log(typeof otraCadenaDeTexto, "|1|");

console.log(typeof otraCadenaDeTextoObjeto, "|2|");

const titulo = document.querySelector("h1");
const subtitulo = document.querySelector("h2");

titulo.textContent = typeof otraCadenaDeTexto;
subtitulo.textContent = typeof otraCadenaDeTextoObjeto;

console.log(otraCadenaDeTexto, " ", otraCadenaDeTexto[10]);

// if (cadenaDeTexto === otraCadenaDeTexto) {
//   console.log("son iguales");
// } else {
//   console.log("No son iguales");
// }

let a = "a";
let b = "b";

if (a > b) {
  console.log(a, "viene antes que ", b);
} else if (b < a) {
  console.log(b, "viene antes que  ", "a");
} else {
  console.log("ambas son iguales");
}

//vamos a hacer una funcion que tome dos strings(parametros) y que esta misma me devuelva si son iguales o no , esta funcion es case-insensitive, que evalua el contenido pero no le importa si son mayusculas y minusculas

//toUppercase() , para volver una cadena de texto a mayusculas
//toLowercase() , para volver una cadena de texto a minusculas

// esto devuelve o equivale un valor booleano , ej . devuelve true o false
function esEquivalente(cadena1, cadena2) {
  return cadena1.toLowerCase() === cadena2.toLowerCase();
  //devuelve el resultado de comparar ambas cadenas de texto a las que se les aplico toLowerCase() que lo que hace es volverlas en minusculas
}

const prueba = esEquivalente("E", "e");

console.log("Esta es una prueba:", prueba);

// la manera literal de crear una string
let miCadenaLiteral = "foo000000000";

// la manera de crear una cadena de texto pero como objeto
let miCadenaObjeto = new String(miCadenaLiteral);

//typeof me sirve para saber el tipo de mi variable/funcion/objeto/etc
//length me sirve para saber cuantos elementos tengo en mi array/string
console.log(
  "1",
  typeof miCadenaLiteral,
  miCadenaLiteral,
  miCadenaLiteral.length,
  "2",
  typeof miCadenaObjeto,
  miCadenaObjeto,
  miCadenaObjeto.length
);

// string miltilineas

let cadenaMultilinea = `
    Esta es la primera linea
    ########################
    Esta es la segunda linea
    $$$$$$$$$$$$$$$$$$$$$$$$
    Esta es la tercer linea

`;

let cadenaSinMultiLinea =
  " Esta es la primera linea ######################## Esta es la segunda linea $$$$$$$$$$$$$$$$$$$$$$$$ Esta es la tercer linea";

console.log("1", cadenaMultilinea, "2", cadenaSinMultiLinea);

// vamos a hacer  una funcion que reciba como parametro una letra de una cancion y cuente cada una de las vocales por separado

//Recibo como parametro un string(cadena de texto)
function contarVocales(cancion) {
  //creo un objeto dentro de mi funcion donde voy a  alamacenar la cantidad de veces que una letra se repite en la cancion(string)
  let contador = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    otros: 0,
  };

  // un iteradot que contine una variable que inicializara en cero y que tiene una condiuion que dice : mienstras esta variable creaada dentro
  // del for sea menor a la longitud de mi cancion(array/string)  y voy aumentar estar variable en 1 cada vez , hasta que esa
  // condicion deje de ser verdadera

  for (let i = 0; i < cancion.length; i++) {
    //voy a evaluar cada caracter en mi cancion y compararlo con lo que quiero buscar que en este caso es "a"(convertida a minuscula por lowercase)
    if (cancion[i].toLowerCase() === "a") {
      // voy a amuentar en 1 el contador para a si esta condicion se cumnple
      contador.a += 1;
    } else if (cancion[i].toLowerCase() === "e") {
      contador.e += 1;
    } else if (cancion[i].toLowerCase() === "i") {
      contador.i += 1;
    } else if (cancion[i].toLowerCase() === "o") {
      contador.o += 1;
    } else if (cancion[i].toLowerCase() === "u") {
      contador.u += 1;
    } else {
      contador.otros += 1;
    }
  }
  // y termino min funcion dandole un valor que en este caso es todo mi objeto contador , 
  //que a su vez contiene los contadores de cada letra 
  return contador;
}

const miCancion = `How many roads must a man walk down
Before you call him a man?
How many seas must a white dove sail
Before she sleeps in the sand?
Yes, and how many times must the cannonballs fly
Before they're forever banned?
The answer, my friend, is blowin' in the wind
The answer is blowin' in the wind
Yes, and how many years must a mountain exist
Before it is washed to the sea?
And how many years can some people exist
Before they're allowed to be free?
Yes, and how many times can a man turn his head
And pretend that he just doesn't see?
The answer, my friend, is blowin' in the wind
The answer is blowin' in the wind
Yes, and how many times must a man look up
Before he can see the sky?
And how many ears must one man have
Before he can hear people cry?
Yes, and how many deaths will it take 'til he knows
That too many people have died?
The answer, my friend, is blowin' in the wind
The answer is blowin' in the wind`;

function contarVocales2(cancion) {
  let contador = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    otros: 0,
  };
  let i = 0;
  while (i < cancion.length) {
    switch (cancion[i].toLowerCase()) {
      case "a":
        contador.a += 1;
        break;
      case "e":
        contador.e += 1;
        break;
      case "i":
        contador.i += 1;
        break;
      case "o":
        contador.o += 1;
        break;
      case "u":
        contador.u += 1;
        break;
      default:
        contador.otros += 1;
        break;
    }
    i++;
  }
  return contador;
}

const cuentaLetras = contarVocales2(miCancion);

console.log(`
  a: ${cuentaLetras.a},
  e: ${cuentaLetras.e},
  i: ${cuentaLetras.i},
  o: ${cuentaLetras.o},
  u: ${cuentaLetras.u},
  otros: ${cuentaLetras.otros},
  total: ${
    cuentaLetras.a +
    cuentaLetras.e +
    cuentaLetras.i +
    cuentaLetras.o +
    cuentaLetras.u +
    cuentaLetras.otros
  },
`);
