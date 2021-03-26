// window

console.log(location);

console.log("Esta es la URL de la pagina:", location.href);

console.log("Este el hostname: ", location.hostname);

console.log("Este es mi host: ", location.host);

console.log("Este es mi path(ruta/camino): ", location.pathname);

console.log("Este es el protocolo que uso: ", location.protocol);

// let contador = 0;

// let intervalo = setInterval(() => {
//   console.log("Hola mundo");
//   console.log(contador);
//   contador++;
//   if (contador === 6) {
//     clearInterval(intervalo);
//   }
// }, 2000);

setTimeout(() => {
  console.log("esta es la ejecucion de timeout  ");
}, 3000);

//localStorage
//almacenamiento local

window.localStorage.setItem("contrasenhas", "1234");

let contra = window.localStorage.getItem("contrasenhas");

console.log(contra);

let profile = window.localStorage.setItem("tema", "claro");

window.localStorage.removeItem("contra");

if (
  window.confirm(
    "Deseas eliminar todas las variables guardadas en el local storage?"
  )
) {
  alert("Hey , las variables fueron eliminadas");

  window.localStorage.clear();
}
