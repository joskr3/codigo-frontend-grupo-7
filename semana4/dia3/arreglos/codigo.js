//arreglos -> arrays
let arreglo_de_numeros = [1, 2, 3, 4, 5];

let alumnos_codigo = ["pepito", "maria", "juan", "jose"];

let mi_suerte = [true, false, true, true, false];

let varios_elementos = ["josue", 24, "soltero", 1.7, true];

varios_elementos[0]; // "josue"
varios_elementos[1]; //24
varios_elementos[2]; // "soltero"
varios_elementos[3]; // 1.70
varios_elementos[4]; // true

varios_elementos[100000000000000]; //undefined

varios_elementos.length



console.log(varios_elementos[varios_elementos.length - 1])




console.log("tengo ",varios_elementos.length , "elementos en mi array")



// un array es una manera de organizar elementos
// generalmente tienen algo en comun 
// ej. numeros, nombres, informacion,etc

let mi_arreglo = ["elemento1","elemento2","elemento3"]

mi_arreglo[0]
mi_arreglo[1]
mi_arreglo[2]
mi_arreglo[5] // me da undefined

mi_arreglo.lenght // la longitud no cantidad de elementos de mi arreglo

mi_arreglo[mi_arreglo.length - 1 ]


console.log("mi ultimo elemento es :",mi_arreglo[mi_arreglo.length - 1 ])



//agregar un elemento al final de mi array

mi_arreglo.push("elemento4")
console.log(mi_arreglo)

console.log("mi ultimo elemento es :",mi_arreglo[mi_arreglo.length - 1 ])



//voy a agregar un elemento al final de mi array 
//push(elemento que voy a agregar)

mi_arreglo.push("elemento5")

console.log(mi_arreglo[mi_arreglo.length-1],": Este es mi nuevo elemento")





//voy a eliminar el ultimo elemento de mi array
//hago uso del metodo pop()

mi_arreglo.pop()
console.log(mi_arreglo[mi_arreglo.length-1],": Este es mi ultimo nuevo elemento")







//vamos a agregar un elemento al inicio del array
//usamos unshift("elemento a agregar al inicio")


mi_arreglo.unshift("elemento0")

console.log("Mi nuevo primer elemento es : ", mi_arreglo[0])










// vamos a eliminar el primer elemento de mi array
//shift()

console.log(mi_arreglo[0], "Mi primer elemento antes de elimnarlo con shift()")
mi_arreglo.shift()

console.log(mi_arreglo[0], "es mi primer elemento ahora")










//necesito averiguar el indice de cierto elemento
//con indexOf("elemento")

console.log("El indice de mi elemento3 es: ",mi_arreglo.indexOf("elemento3"))
















