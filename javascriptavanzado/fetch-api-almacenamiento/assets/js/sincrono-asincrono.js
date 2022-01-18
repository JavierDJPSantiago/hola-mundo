/*Código sincrono; hago la variable, luego asigno el valor y por ultimo se imprime*/


let variableSincrona;
variableSincrona = 10 * 3;
console.log(variableSincrona);




/*Codigo asincrono */

//setTimeout la tarea se ejecuta despues de cierto tiempo; 2000 es dos segundos
//en este caso js no se espera a que pasen esos dos segundos inmediatamente muestra el console.log
/*

let variableAsincrona;

setTimeout(() =>{
    variableAsincrona = 10 * 3; 
},2000);

console.log(variableAsincrona);
*/




//aqui se muestra despues de dos segundos porque console.log esta dentro de la funcion
let variableAsincrona;

setTimeout(() =>{
    variableAsincrona = 10 * 3; 
    console.log(variableAsincrona);
},2000);

