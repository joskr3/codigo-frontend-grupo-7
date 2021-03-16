// este es un comentario de una linea

/* 
Este es un comentario
multilineas en Javascript
*/

//variable de tipo texto
let nombre = "Josue";

//variables de tipo numero
let miEdad = 24;
let miPeso = 75.4;

// 1.creo una variable para mi altura
// 2. creo una variable para mi peso
// 3. creo una variable que divida mi masa corporal entre mi altura al cuadrado

let altura = 1.7;
let peso = 75.4;

//bmi= indice de masa corporal
let bmi = peso / altura ** 2;

//alert(bmi);

// hay 5 operaciones basicas

// la suma +
// la multiplicacion *
// la division /
// la resta -
// el modulo

let a = 6;
let b = 10;

let suma = a + b;
console.log(suma);

let resta = b - a;
console.log(resta);

let division = b / a;
console.log(division);

let multiplicacion = a * b;
console.log(multiplicacion);

let potenciacion = a ** b;
console.log(potenciacion);

// 0.5 = 1/2
let radicacion = a ** 0.5;
console.log(radicacion);

//el modulo es el resto de una division
const modulo = a % b;

console.log(modulo);

//1. declarar una variable para la formula de grados centigrados a  fahrenheit

// variable  grados centigrados = formula en farenheit

// variable grados farenheit = formula en centigrados

let celsius = 1;

let fahrenheit = celsius * (9 / 5) + 32;

console.log("celsius a fahrenheit", fahrenheit);

// fahrenheit a celsius

// tipo booleano -> true- verdad - 1 ; false -> falso-0

let soyFrontend = true;

let soyMachineLearning = false;

//JSON -> Javascript Object Notation - notacion de objetos de javascript, la forma en la que javascript define un objeto

let json2 = {
  propiedad6: 123,
};

let json = {
  key: "value",
  llave: "valor",
  propiedad1: "valor de texto",
  propiedad2: 34,
  propiedad3: true,
  propiedad4: json2,
};

let josue = {
  nombre: "josue",
  apellidoPaterno: "retamozo",
  apellidoMaterno: "vargas",
};

let nombreCompleto = `${josue.nombre} 
                      ${josue.apellidoPaterno} 
                      ${josue.apellidoMaterno}`;

console.log("Mi nombre completo es: ", nombreCompleto);

//vamos a crear un objeto donde almacenaremos nuestros hobbies favoritos , numero de mascotas que tenemos y ademas si somos hombres le damos true/false e igual con mujeres
// vamos a armar un alerta que reciba como datos nuestros nombres y de un mensaje de bienvenida
// vamos a escribir la formula cuadratica

let objeto = {
  hobbie1: "leer",
  hobbie2: "programar",
  hombre: true,
  mujer: false,
};

let primerNombre = "Josue";

let apellido = "Retamozo";

alert(`${primerNombre} ${apellido}`);

let x = 0;
let a = 0;
let b = 0;
let c = 0;

x = ((-b + 0.5 ** (b ** 2 - 4 * a * c)) / 2) * a;
