//funcion asincrona

async function fun_asincrona() {
  return 23;
}
//funcion flecha  asincrona
const otraFuncion = async () => 42;

console.log(fun_asincrona());

fun_asincrona().then((valor) => {
  console.log("Este es el valor de la promesa", valor);
});
