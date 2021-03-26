
const demoId = document.getElementById("demo");

//console.log(demoId)

demoId.style.border = "5px  solid blue"

const demoClass = document.getElementsByClassName("demo")

//console.log(demoClass)

demoClass[0].style.border = "2px dashed yellow"
demoClass[1].style.border = "1px dotted red"


//vamos a usar un for para recorrer mi array de elementos HTML y vamos a definirle 
// un vcalor a su borde de los elementos