//try-catch

let variable_ejemplo = 45;

try {
  console.log(variable_ejemplo * 1000);
} catch (error) {
  console.log(error);
}

// let edad = prompt("Ingresa tu edad");

// try {
//   if (isNaN(+edad)) {
//     throw new Error("No es un numero!");
//   }
//   console.log("Hey , felicitaciones , tienes: ", edad);
// } catch (error) {
//   console.log(error);
// }

// vamos a pedir la fecha de nacimiento(año)
// vamos a hacer la comprobacion de que sea un numero y que sea positivo y que sea mayor 1960
//si falla lanzamos un error con la condicion que no se cumplio . ej.si ingreso un numero menor a 1960 , deberiamos lanzar un error que diga , hey año de nacimiento mayor a 1960

// let anho_nacimiento = prompt("ingresa tu año de nacimiento");

// try {
//   if (+anho_nacimiento) {
//     throw new Error("no es un dato valido(no es numero)");
//   }

//   if (+anho_nacimiento <= 1960) {
//     throw new Error("no es un dato valido(fecha menor a 1960)");
//   }

//   let fechaActual = new Date();

//   console.log("tu edad es :", fechaActual.getFullYear() - anho_nacimiento);
// } catch (error) {
//   console.log(error, "error en la variable a evaluar");
// }

let miVariable = prompt("Dame un numero");

try {
  if (isNaN(+miVariable)) {
    throw new Error("No es un numero");
  }
  console.log(miVariable);
} catch (error) {
  if (error.name === "TypeError") {
    console.log(error);
  }
  throw error;
}


// en la funcion del binomio al cuadrado
//lanzaremos una excepcion si lo que ingreso no son numeros todo usando try-catch