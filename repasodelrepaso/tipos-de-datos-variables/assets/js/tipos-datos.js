let nombre = "CarlosEduardo";

let edad = 31;

let tienesTrabajo = true;  //true o false

let variableNull = null;

let variableUndefined;

console.log(typeof(nombre)); //string o cadena de texto
console.log(typeof(edad));   //number 
console.log(typeof(tienesTrabajo)); //boolean
console.log(typeof(variableNull)); //null
console.log(typeof(variableUndefined)); //undefined

console.log(variableNull === variableUndefined); /*=== Operador estricto(checa el dato y el tipo de dato) usarlo siempre*/

console.log(typeof("1" == 1));

console.log(typeof(0 === false)); 


console.log(typeof(10 + 10)); //number

console.log(typeof("10" + 10)); //string, debido a que concatenas(sumas) un string con un valor, lo vuelve string

let numero = 10;
console.log(numero.toString()); //convertir un numero en un string .toString
