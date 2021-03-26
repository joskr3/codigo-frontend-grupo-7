//Math -> matematica

// es un objeto con un  conjunto de funciones(metodos) para hacer calculos matematicos


function calcularAreaCirculo(radio){
    return Math.PI * Math.pow(radio,2)
}

console.log(calcularAreaCirculo(1))



let numeroMayor =   Math.max(1,2,3,4,5,6)
console.log(numeroMayor)

let arrayNumeros = [23,43,56,12,23,45]
console.log(Math.max(...arrayNumeros))


// que hace Math.min ? 