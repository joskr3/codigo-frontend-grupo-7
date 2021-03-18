let condicion = true;

if (condicion) {
  console.log("El valor es verdadero");
} else {
  console.log("El valor es falso");
}

let frase = "";

if (frase === "susy") {
  console.log("vive la vida y no dejes que la vida te viva");
} else if (frase === "chupetin  trujillo") {
  console.log("Gaaa");
} else if (frase === "personaje") {
  console.log("otra frase");
} else if (frase === "personaje") {
  console.log("otra frase");
} else if (frase === "personaje") {
  console.log("otra frase");
} else if (frase === "personaje") {
  console.log("otra frase");
} else if (frase === "personaje") {
  console.log("otra frase");
} else if (frase === "personaje") {
  console.log("otra frase");
} else if (frase === "personaje") {
  console.log("otra frase");
} else if (frase === "personaje") {
  console.log("otra frase");
} else if (frase === "personaje") {
  console.log("otra frase");
} else if (frase === "personaje") {
  console.log("otra frase");
} else {
  console.log("frase de relleno");
}

switch (frase) {
  case "susy":
    console.log("frase de susy");
    break;
  case "chupetin":
    console.log("frase chupetin....");
    break;
  case "personaje":
  case "personaje2":
  case "personaje3":
    console.log("frase generica");
    break;
  case "personaje con frase":
    console.log("Este es una frase distinta");
    break;
  default:
    console.log(
      "imprime una frase por defecto, cuando ninguna de las otras condiciones se cumpla"
    );
}

let comida = "hamburguesa";

switch (comida) {
  case "hamgurguesa":
    console.log("Es mi plato favorito!! :) .");
    break;
  case "pizza":
    console.log("uy que rico pizza !");
    break;
  case "lentijitas":
  case "verduras":
  case "fideos":
    console.log("No es mi comida favorita");
    break;
  case "lomo saltado":
    console.log("que rico lomo saltado!!");
    break;
  default:
    console.log("Ups! , no conozco ninguna de esas comidas !");
}


comida = "lentejitas"

if (comida === "hamburguesa") {
  console.log("Es mi plato favorito!! :) .");
} else if (comida === "pizza") {
  console.log("uy que rico pizza !");
} else if (comida === "lentejitas") {
  console.log("No es mi comida favorita");
} else if (comida === "verduras") {
  console.log("No es mi comida favorita");
} else if (comida === "fideos") {
  console.log("No es mi comida favorita");
} else {
  console.log("Ups! , no conozco ninguna de esas comidas !");
}
