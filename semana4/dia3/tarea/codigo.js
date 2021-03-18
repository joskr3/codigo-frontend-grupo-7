const select = document.querySelector("select");
const parrafo = document.querySelector("p");
const titulo = document.querySelector("h1");

select.addEventListener("change", mostrarCanciones);

function mostrarCanciones() {
  let eleccion = select.value;
  let contenido = eleccion.value;

  if (eleccion === "mr-tambourine") {
    titulo.textContent = contenido;

    parrafo.textContent = ` Hey, Mr. Tambourine Man, play a song for me
        I'm not sleepy and there is no place Im going to
        Hey, Mr. Tambourine Man, play a song for me
        In the jingle jangle morning I'll come following you
        Though I know that evening's empire has returned into sand
        Vanished from my hand
        Left me blindly here to stand, but still not sleeping
        My weariness amazes me, I'm branded on my feet
        I have no one to meet
        And the ancient empty street's too dead for dreaming
        Hey, Mr. Tambourine Man, play a song for me
        I'm not sleepy and there is no place I'm going to
        Hey, Mr. Tambourine Man, play a song for me
        In the jingle jangle morning I'll come following you
        Take me on a trip upon your magic swirling ship
        My senses have been stripped
        My hands can't feel to grip
        My toes too numb to…`;
  } else if (eleccion === "i-want-to-break-free") {
    titulo.textContent = contenido;
    parrafo.textContent = `I want to break free
    I want to break free
    I want to break free from your lies
    You're so self satisfied I don't need you
    I've got to break free
    God knows, God knows I want to break free.
    I've fallen in love
    I've fallen in love for the first time
    And this time I know it's for real
    I've fallen in love, yeah
    God knows, God knows I've fallen in love.
    It's strange but it's true
    I can't get over the way you love me like you do
    But I have to be sure
    When I walk out that door
    Oh how I want to be free, Baby
    Oh how I want to be free,
    Oh how I want to break free.
    But life still goes on
    I can't get used to, living…`;
  } else if (eleccion === "movement") {
    titulo.textContent = contenido;
    parrafo.textContent = `I still watch you when you're groovin'
    As if through water from the bottom of a pool
    You're movin' without movin'
    And when you move, I'm moved
    You are a call to motion
    There, all of you a verb in perfect view
    Like Jonah on the ocean
    When you move, I'm moved
    When you move
    I'm put to mind of all that I wanna be
    When you move
    I could never define all that you are to me
    So move me, baby
    Shake like the bough of a willow tree
    You do it naturally
    Move me, baby
    You are the rite of movement
    Its reasonin' made lucid and cool
    I know it's no improvement
    When you move, I move
    You're less Polunin leapin'
    Or Fred Astaire in sequins
    Honey, you, you're Atlas in his sleepin'
    And when you move, I'm moved
    When you move
    I can recall somethin' that's gone from me
    When you move
    Honey, I'm…`;
  } else if (eleccion === "cervecero") {
    titulo.textContent = contenido;
    parrafo.textContent = `Cervecero yo soy y mi vida se va acabando
    En tragos, en noches y copas de licor
    Desesperado vivo en las cantinas
    Bebiendo, sufriendo, llorando por su amor
    Cantinero, llegó el cervecero
    Cantinero, llegó el cervecero
    Pónganme mis tragos
    Pónganme mis copas
    Que quiero beber y beber y beber hasta morir
    Beber y beber y beber hasta morir
    Cervecero yo soy y mi vida se va acabando
    En tragos, en noches y copas de licor
    Desesperado vivo en las cantinas
    Bebiendo, sufriendo, llorando por su amor
    Cantinero, llegó el cervecero
    Cantinero, llegó el cervecero
    Pónganme mis tragos
    Pónganme mis copas
    Que quiero beber y beber y beber hasta morir
    Beber y beber y beber hasta morir
    Cervecero yo soy y mi vida se va acabando
    En tragos, en noches y copas de licor
    Desesperado vivo en las…`;
  } else {
    titulo.textContent = "";
    parrafo.textContent = "*Debes seleccionar una cancion";
  }
}
