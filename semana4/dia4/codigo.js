console.log("Hola mundo");

console.log(1 * 2);

let condicion = true;

if (condicion === true) {
  console.log("Esto se ejecuta si mi conficion es verdadera");
} else {
  console.log("Esto se ejecuta si mi condicion es falsa");
}

let palabra = "";

if (palabra === "palabra1") {
  console.log("imprime palabra 1 si la comparacion es verdadera");
} else if (palabra === "palabra 2") {
  console.log("imprime palabra 2 si la comparacion es verdadera");
} else if (palabra === "palabra2") {
  console.log("imprime palabra 2 si la comparacion es verdadera");
} else if (palabra === "palabra1") {
  console.log("imprime palabra 2 si la comparacion es verdadera");
} else {
  console.log(
    "imprime palabra por defecto si ninguna de las comparaciones es verdadera"
  );
}

let cancion = "la la la";

switch (cancion) {
  case "cancion1":
    console.log("esta es la cancion 1");
    for (let pasos = 0; pasos < 10;pasos++){
        console.log("camina defrente")
    }
    break;
  case "cancion2":
    console.log("esta es la cancion 2");
    break;
  case "cancion3":
    console.log("esta es la cancion 3");
    break;
  case "cancion4":
    console.log("esta es la cancion 4");
    break;
  case "cancion5":
    console.log("esta es la cancion 5");
    break;
  default:
    for (let pasos = 0; pasos < 10;pasos++){
        console.log("camina defrente")
    }
    console.log("no seleccionaste nunguna cancion");
}



// FOR

for (let pasos = 0; pasos < 10;pasos++){
    console.log("camina defrente")
}

console.log("camina defrente")
console.log("camina defrente")
console.log("camina defrente")
console.log("camina defrente")
console.log("camina defrente")
console.log("camina defrente")
console.log("camina defrente")
console.log("camina defrente")
console.log("camina defrente")
console.log("camina defrente")
console.log("camina defrente")
console.log("camina defrente")



// && y logico, me sirve para unir dos condiciones 
// || o logico , me sirve para escoger entre dos valores 
// % me sirve para obtener el resto de una division

// voy a imprimir todos los numeros pares que sean menor a 300 usando for 

let alumnos_favoritos = ["Cristiano", "Messi", "Maradona", "Pele", "Iniesta"]
let informacion = "Mis alumnos favoritos son : "

const texto = document.querySelector("p")

for (let indice = 0 ; indice < alumnos_favoritos.length; indice++){
    informacion += alumnos_favoritos[indice] + ", "
}
console.log(informacion)

texto.textContent = informacion;