let arrayNumeros = [10, 20, 30];

console.log("array inicial", arrayNumeros);
let arrayResultado = arrayNumeros.map((numero, index) => {
  return index + "   " + numero * 2;
});

console.log("nuevo array", arrayResultado);

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

// arrayDeUsuarios.map((usuario) => {
//   let tag = document.createElement("p");
//   let text = tag.innerHTML(
//     `Hola me llamo ${usuario.nombre}, tengo ${usuario.edad} y mi color favorito es el ${usuario.colorFav}`
//   );
//   tag.appendChild(text);
// });

arrayDeUsuarios.map((usuario) => {
  const miUsuario = document.createElement("li");
  miUsuario.textContent = `map######. Hola me llamo ${usuario.nombre}, tengo ${usuario.edad} y mi color favorito es el ${usuario.colorFav}`;
  document.querySelector("#usuarios").appendChild(miUsuario);
});

//for each

let otroArray = [100, 200, 300];

otroArray.forEach((numero) => console.log(numero * 3));

arrayDeUsuarios.forEach((usuario) => {
  const miUsuario = document.createElement("li");
  miUsuario.textContent = `foreach---->>>>>Hola me llamo ${usuario.nombre}, tengo ${usuario.edad} y mi color favorito es el ${usuario.colorFav}`;
  document.querySelector("#usuarios").appendChild(miUsuario);
});

//reduce()

let sumaElementos = [10, 20, 30];

let resultado = sumaElementos.reduce((acumulador, numero) => {
  return acumulador + numero;
});

console.log("Resultado del reduce: " , resultado)