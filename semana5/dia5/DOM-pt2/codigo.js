const demoId = document.getElementById("demo");

//console.log(demoId)

demoId.style.border = "5px  solid blue";

const demoClass = document.getElementsByClassName("demo");

//console.log(demoClass)

demoClass[0].style.border = "2px dashed yellow";
demoClass[1].style.border = "1px dotted red";

//vamos a usar un for para recorrer mi array de elementos HTML y vamos a definirle
// un vcalor a su borde de los elementos

for (let i = 0; i < demoClass.length; i++) {
  demoClass[i].style.border = "3px dotted green";
}

// seleccion por etiqueta

let demoTag = document.getElementsByTagName("article");

// console.log(demoTag);

// for (elementoHtml in demoTag) {
//   //console.log(demoTag[elementoHtml]);
//   demoTag[elementoHtml].style.border = "6px solid orange";
// }

for (i = 0; i < demoTag.length; i++) {
  demoTag[i].style.border = "1px solid blue";
}

// let i = 0;

// while (i <= demoTag.length) {
//   demoTag[i].style.border = "3px solid red";
//   i++;
// }

const demoQuery = document.querySelector("#demo-query");

//console.log(demoQuery)

demoQuery.style.border = "2px solid green";

const demoQueryAll = document.querySelectorAll(".demo-query-all");

//for-each

demoQueryAll[0].style.border = "5px solid pink";

Array.from(demoClass).forEach((elemento) => {
  elemento.style.border = "5px solid pink";
});

//const demoQueryAllArray = Array.from(demoQueryAll)
// console.log(demoQueryAll);

// demoQueryAllArray.map((elemento) => {
//   elemento.style.border = "15px solid red";
// });

//eventos

const demoTitle = document.getElementById("titulo");


demoTitle.addEventListener("click",()=>{
    alert("Hey, me clickeaste!!!")
})



