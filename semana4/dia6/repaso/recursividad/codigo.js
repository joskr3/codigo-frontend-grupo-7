//let mi_nombre = prompt("Adivina mi nombre!!!");

// while (mi_nombre.toLowerCase() !== "josue") {
//   if (mi_nombre.toLowerCase() === "josue") {
//     alert("Hey!! , adivinaste mi nombre.(primera-condicion)");
//     break;
//   } else {
//     let match = prompt("Sigue intentando");
//     if (match === "josue") {
//       alert("Hey!! , adivinaste mi nombre.(segunda-condicion)");
//       break;
//     }
//   }
// }

// let mi_nombre = prompt("Adivina mi nombre!!!");// lo que escriba el usuario

// while (mi_nombre !== "josue") {
//   mi_nombre = prompt("Sigue intentando!!!");// alamaceno otro valor
//   break;
// }
// alert("Hey! adivinaste mi nombre!!!");

// let mi_nombre = prompt("Adivina mi nombre!!!");

// do {
//   mi_nombre = prompt("Sigue intentando!!!");
//   if (mi_nombre === "josue") {
//     alert("Hey! adivinaste mi nombre!!!");
//   }
// } while (mi_nombre !== "josue");

// con recursividad

function adivina_mi_nombre(mi_nombre) {
  mi_nombre = prompt("Adivina mi nombre!!!");
  if (mi_nombre === "josue") {
    alert("Hey! adivinaste mi nombre!!!");
    return;
  }
  adivina_mi_nombre(mi_nombre);
}

adivina_mi_nombre();
