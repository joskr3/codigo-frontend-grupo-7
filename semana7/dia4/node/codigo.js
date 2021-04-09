console.log("Hola mundo!!!");

const  libros  = require("./libros");

libros.map((libro) => {
  console.log(libro);
});

// const generadorPokemones = async (idPokemon) => {
//   try {
//     const respuesta = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`
//     );
//     const data = await respuesta.json();

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// generadorPokemones(25)



//NPM  -> node package manager - gestor de paquetes de node


let cowsay = require("cowsay");

console.log(cowsay.say({
	text : "Hola amigos de codiGo",
	e : "oO",
	T : "U "
}));



