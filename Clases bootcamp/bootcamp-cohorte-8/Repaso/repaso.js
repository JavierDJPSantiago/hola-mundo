/*








/*
Funcion
bloque de codigo reutilizable

function nombre(parametros){
    returno                 //para que nos regrese datos que ya usamos

}
nombre(argumentos);          //con esto se llama a la funcion, aqui se ponen los parametros
*/

function procesadorDeFrutas(manzanas,naranjas){
    let jugo = "Jugo de " + manzanas + "manzanas y " + naranjas + "naranjas.";
    return jugo;

}

let jugoDeManzana = procesadorDeFrutas(4,0)
console.log(jugoDeManzana);

let jugoDeNaranja = procesadorDeFrutas (0,5)
console.log(jugoDeNaranja)
