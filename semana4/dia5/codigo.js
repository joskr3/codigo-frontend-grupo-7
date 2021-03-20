//Funciones
// ``
function sumar(numero1, numero2) {
  let total = numero1 + numero2;
  let poner_Html = document.write(`<h1>${total}</h1>`);
  return poner_Html;
}

function sumar1(numero1, numero2) {
  let total = numero1 + numero2;

  console.log(total);

  //return total + 1000;
}

function restar(numero1, numero2) {
  console.log(numero1 - numero2);
  return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

function ecu_cuadratica(a, b, c) {
  let discriminante = b ** 2 - 4 * a * c;
  let x = 0;
  if (discriminante > 0) {
    x = -b + (Math.sqrt(discriminante) / 2) * a;
    let escribir_formula = document.write(`
    <div style="display: flex; flex-direction: column;">
        <h1>${x}</h1>
        <p>${a}</p>
        <p>${b}</p>
        <p>${c}</p>
    </div>
    `);
    return escribir_formula;
  } else {
    return "Error, ingresa valores validos";
  }
}

ecu_cuadratica(56, 34, 5);
