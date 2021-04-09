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
  })
  .catch((error) => new Error(error.message));

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


//con axios


const generadorPokemonesAxios = async (idPokemon) => {
    try {
      const respuesta = await axios(
        `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`
      );
      const elemento = document.getElementById("elemento2");
  
      elemento.innerHTML = `
      <div class="card" style="width: 18rem;">
          <img src="${respuesta.data.sprites.front_default}" class="card-img-top" alt="mi pokemon favorito">
           <div class="card-body">
              <h5 class="card-title">${respuesta.data.name}</h5>
              <p class="card-text">Mi pokemon favorito</p>
              <a href="#" class="btn btn-primary">Ir al mapa</a>
       </div>
  `;
    } catch (error) {
      console.log(error);
    }
  };

  generadorPokemonesAxios(265)