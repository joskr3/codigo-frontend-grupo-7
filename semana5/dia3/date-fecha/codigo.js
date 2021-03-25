// Objeto Date- para trabajar con fechas(tiempo)

const ahora = new Date();

console.log(ahora);
//getTime() me devuelve la cantidad de milisegundos que pasaron desde 1 de enero de 1970
const milisegundos = ahora.getTime();

console.log(milisegundos);

//fecha cero

const fechaCero = new Date(0);

console.log(fechaCero);

const fechaUniversal = Date.UTC(milisegundos);

//51(cantidad de años desde 1970)  x 31557600000(cantidad de milisegundos en un año)

const fechaCeroConMilisegundos = new Date(31557600000 * 51);

console.log(fechaCeroConMilisegundos);

const fechaString = new Date("July 28 1821 12:00");

console.log(fechaString);

const anho = fechaString.getFullYear();

const mes = fechaString.getMonth();

const diaMes = fechaString.getDate(); //0-31

const diaSemana = fechaString.getDay(); //0-6

console.log(fechaString.getFullYear());
fechaString.setFullYear("1824");

console.log(fechaString.getFullYear());

function obtenerEdad(anhoNacimiento) {
  const fechaActual = new Date();
  const anho = fechaActual.getFullYear()
  return (anho - anhoNacimiento) ;
}

console.log(obtenerEdad(1996))


//tarea es : hacer una funcion  a la que le paso la fecha  de esta manera(en un string en ingles)
// por ejemplo : July 28 1821 12:00

// deben retornar cuantos dias , meses , y años pasaron desde esa fecha






