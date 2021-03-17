//CONDICIONALES

//1.CONDICION BASICA
// if(condicion es true){
//     // hago algo aca
// }else{
//     // hago otra cosa aca(si la condicion es falsa)
// }

//2.CONDICION MULTIPLE
// if(se cumple esta condicion){
//     //mi codigo que se ejecuta si mi condicion es verdadera
// }else if (si se cimple esta otra condicion){
//     //mi codigo si se ejecuta esta otra condicion
// } else if(si se cumple esta otra condicion){
//      //mi codigo si se ejecuta esta otra condicion
// }else{
//     // si ninguna condicion se cumple
// }

//PSEUDOCODIGO
// SI (una condicion es cierta) {
//     ejecuto un codigo aqui
// }SINO{
//     ejcuto aqui un codigo si mi condicion es falsa
// }

// if (condicion) {
//     //hago algo aca
// }else{
//     //hago otra cosa
// }

//PSEUDOCODIGO-MULTIPLE-CONDICIONAL

// SI(CONDICION1 ES VERDADERA){
//     HAGO ESTO QUE ESTA DENTRO DE ESTE PAR DE LLAVES
// }SINO SI(CONDICION2 ES VERDADERA){
//     HAGO ESTE OTRO CODIGO QUE ESTA DENTRO DE ESTE PAR DE LLAVES
// }SINO SI (CONDICION3 ES VERDADERA){
//     HAGO ESTE OTRO CODIGO
// }SINO SI (CONDICION3 ES VERDADERA){
//     HAGO ESTE OTRO CODIGO
// }SINO SI (CONDICION3 ES VERDADERA){
//     HAGO ESTE OTRO CODIGO
// }SINO SI (CONDICION3 ES VERDADERA){
//     HAGO ESTE OTRO CODIGO
// }SINO{
//     SI NINGUNA DE MIS CONDICIONES FUE VERDADERA ACA EJECUTO UN CODIGO
// }

let condicion = true;

if (condicion === true) {
  console.log("Hola amigos , bienvenidos a codiGo!!");
} else {
  console.log("Y que estas esperando ñ_ñ");
}

let a = 0;
let b = 0;

a = 4;
a = 6;
a = 9;

console.log(a);

b = 5;

let suma = a + b;
//  el === compara contenido y tipo
if (suma === "9") {
  //alert("Felicitaciones , adivinaste!!!");
} else {
  //alert("oh , lo siento , sigue intentando!! :)");
}

// == solo compara contenido
let lenguaje_de_programacion = "C++";

if (lenguaje_de_programacion === "python") {
  console.log("Python es asombroso");
} else if (lenguaje_de_programacion === "javascript") {
  console.log("Javascript tambien lo es !");
} else if (lenguaje_de_programacion === "php") {
  console.log("mejor apaga tu computadora amigo/a xd");
} else if (lenguaje_de_programacion == "c++") {
  console.log("woow tu eres de los bravos ");
} else {
  console.log("que? aun no sabes ninguno ? ñ_ñ");
}

// dependiendo de cual
//sea mi cancion favorita (titulo)voy a mostrar  en la consola un
// pequeñisimo fragmento de letra de la cancion

//FUNCIONES

function miFuncion() {
  console.log("Mi primera funcion es lo mejor del mundo!!!!.");
  console.log("las funciones me sirven para no repetir mi codigo");
  console.log("las funciones me ayudan a escribir mejor codigo");
}

// miFuncion()

function imprimeMiNombre(nombre) {
  if (nombre === "") {
    return "Debes ingresar un nombre";
  } else if (nombre === undefined) {
    return "Debes ingresar un valor valido";
  }

  return ` Mi nombre es ${nombre}`;
}

function calculaMisAñosPerro(edad) {
  if (edad === undefined) {
    return "Debes ingresar un valor valido";
  }
  if (edad > 0 && edad < 100) {
    return ` Mi edad en años perro es  ${edad * 7}`;
  }
  if (edad === 0) {
    return "Ingresa una edad  valida";
  }
}

console.log(calculaMisAñosPerro());
console.log(calculaMisAñosPerro(24));
console.log(calculaMisAñosPerro(0));

// vamos a crear una funcion que dentro evalue un parametro que se llama clima

// esta funcion debera mostrar una frase cuando yo ponga ej. lluvioso, nublado, seco
// o cualquier otro clima

// no nos olvidemos de llamar la funcion

// y && -> si mi condicion1 es cierta Y mi condicion2 es cierta hago algo....

// o  || -> si mi condicion1 es cierta O mi condicion2 es cierta hago algo....

//con un parametro
//imprimeMiNombre("Josue")

//console.log(imprimeMiNombre("Josue"));

//console.log(imprimeMiNombre(""));

console.log(imprimeMiNombre());

console.log(imprimeMiNombre("Josue"));

console.log(imprimeMiNombre(""));

// //imprimir el resultado de mi funcion con parametros
// console.log(imprimeMiNombre("Josue"))

// //imprimir el resultado de mi funcion sin pasar parametros
// console.log(imprimeMiNombre(), "funcion sin parametros")

// //imprimir el resultado de mi funcion pasandole un paramtero vacio
// console.log("")
// //sin parametros
// imprimeMiNombre()

let cadena_de_texto = "es un tipo string";

let numero = "es de tipo number";

let booleano = " es de tipo bool(true/false)";

//let undefined = undefined;

// undefined , es un valor "indefinido" , lo que significa que no tiene asigando un valor
// pero la variable o constante que lo contiene si existe

let seleccionar = document.querySelector("select");
let parrafo = document.querySelector('p');

seleccionar.addEventListener('change', establecerClima);

function establecerClima() {
  let eleccion = seleccionar.value;

  if (eleccion === "soleado") {
    parrafo.textContent = "El dia esta agradable y muy bonito";
  } else if (eleccion === "lluvioso") {
    parrafo.textContent = "Esta lloviendo , mejor quedate en casa";
  } else if (eleccion === "nevado") {
    parrafo.textContent = "Si sales , trata de salir muy abrigado";
  } else if (eleccion === "nublado") {
    parrafo.textContent = "No hace falta que salgas con lentes de sol";
  } else {
    parrafo.textContent = "";
  }
}


