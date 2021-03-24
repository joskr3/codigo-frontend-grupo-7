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



// vamoas a hacer  una funcion que reciba como parametro una letra de una cancion y cuente cada una de las vocales por separado
