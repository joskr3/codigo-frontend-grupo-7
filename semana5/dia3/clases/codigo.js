// Clases

//las clases en js son funciones , con sintaxis especial, pero siguen siendo funciones

//funcion
const func = function () {};

//clase
const clase = class {};

console.log(Object.getPrototypeOf(func));
console.log(Object.getPrototypeOf(clase));

const constructorDeUnaFuncion = new func();

const clase2 = new clase();


let entrada = "3572844"; 
let filtrados = {}; 
let propiedades = Object.keys(filtrados);
 
entrada.forEach(function (corredor) {
  if (corredor in propiedades) {
    console.log(`${corredor} ya esta en propiedades`);
  } else {
    console.log(`${corredor} no esta en propiedades,agregando...`);
    Object.defineProperty(filtrados, corredor, {
      value: "test",
      writable: true,
      enumerable: true,
      configurable: true,
    });
    propiedades = Object.keys(filtrados);
  }
});
//console.log(`los elementos son:${filtrados}`)
console.log(`Mis propiedades agregadas: ${propiedades}`);
