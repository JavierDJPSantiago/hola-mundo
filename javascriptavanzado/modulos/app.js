//Modulas; muy utiles para tener orden en js


import {sumar,multiplicar ,mostrarResultado} from "./calculadora.js" // ./ indica que ese archivo esta en la misma carpeta; / sig. que esta en una carpeta siguiente; .. que esta una carpeta antes 

let resultado = sumar (10,20);
console.log (resultado);//dice no definido porque no hemos hecho export e import; despues de esto ya da la funcion

let resultadoMultiplicar = multiplicar(12, 46);

mostrarResultado("multiplicacion", 12, 46, resultadoMultiplicar);//muestra la funcion mostrarResultado que esta en calculadora //"multiplicacion" no es una variable, solo es parametro de la funcion, puede ir un number o un string//La "multiplicacion del 12 y el 46 es 552"