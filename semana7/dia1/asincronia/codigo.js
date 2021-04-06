
// lista  de que hacer

//1.lavar la ropa
//2.pasear al perro
//3.sacar la basura
//cocinar algo

function lavarRopa () {
    console.log("lavar ropa")
}
function pasearAlperro () {
    console.log("pasear al perro")
}
function sacarLaBasura () {
    console.log("sacar la basura")
}
function cocinarAlgo () {
    console.log("cocinar algo")
}


function quehaceres (){
    lavarRopa();
    pasearAlperro();
    sacarLaBasura();
    cocinarAlgo();
}

function quehaceres (callback){
    callback(err,lavarRopa);
    pasearAlperro();
}
 
