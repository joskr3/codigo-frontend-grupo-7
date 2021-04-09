const url = "https://pokeapi.co/api/v2/pokemon/136/";

fetch(url)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    const elemento = document.getElementById("elemento");
    elemento.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${data.sprites.front_default}" class="card-img-top" alt="mi pokemon favorito">
             <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">Mi pokemon favorito</p>
                <a href="#" class="btn btn-primary">Ir al mapa</a>
         </div>
    `;
    console.log(data);
  })
  .catch((error) => new Error(error.message));

//   miUsuario.textContent = `foreach---->>>>>Hola me llamo ${usuario.nombre}, tengo ${usuario.edad} y mi color favorito es el ${usuario.colorFav}`;
//   document.querySelector("#usuarios").appendChild(miUsuario);

//async - await

const generadorPokemones = async (idPokemon) => {
  try {
    const respuesta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`
    );
    const data = await respuesta.json();

    const elemento = document.getElementById("elemento1");

    elemento.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${data.sprites.front_default}" class="card-img-top" alt="mi pokemon favorito">
         <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">Mi pokemon favorito</p>
            <a href="#" class="btn btn-primary">Ir al mapa</a>
     </div>
`;
  } catch (error) {
    console.log(error);
  }
};

generadorPokemones(157)