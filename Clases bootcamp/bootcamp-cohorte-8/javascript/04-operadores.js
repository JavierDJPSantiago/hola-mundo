/*

Operadores aritmeticos: nos sirven para hacer operaciones
+ Sirven para sumar o concatenar, cuando es letras se concatena, numeros los suma
- Sirve para restar numeros
* Sirve para multiplicar 2 numeros
% modulo, nos sirve para obtener el residuo de una division
/ nos sirve para dividir dos numeros;

*,-,% y / son solo para numeros
*/

/*
//con suma +
let numero1 = 34;
let numero2 = 5;

console.log(numero1 + numero2); da 39 en la consola
*/


/*
//con const
const numero1 = 34;
const numero2 = 5;
const suma = numero1 + numero2;

console.log(suma); da 39
*/


/*
const numero1 = prompt('Ingresa el numero 1')
const numero2 = prompt('Ingresa el numero 2');// prompt() pedir al usuario que de el dato
const suma = numero1 - numero2;

//console.log(suma); con + los concatena D: no los suma, detecta como string

//console.log(suma); con * los multiplica porque lo toma como numero
//console.log(suma); con - los resta porque lo toma como numero al transformarlos

*/


/*
//con parseInt lo toma como numero y no como texto'

const numero1 = parseInt(prompt('Ingresa el numero 1'));//parseInt() convierte el texto en numero
const numero2 = parseInt(prompt('Ingresa el numero 2'));
const suma = numero1 + numero2;
console.log(suma);
*/


//Con /

const numero1 = parseInt(prompt('Ingresa el numero 1'));
const numero2 = parseInt(prompt('Ingresa el numero 2'));

const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;

console.log("el numero 1 es: " + numero1);
console.log("el numero 2 es: " + numero2);

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);

console.log("el porcentaje es " + 5 % 3);

//Operadores logicos