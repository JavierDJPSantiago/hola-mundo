/*condicionales
Condicionales se utilizan para tomar decisiones dentro
de nuestro programa
Usado cuando hay limitantes, por ejemplo disponibilidad
de productos
*/
/*
if, todo lo que inponga if sera verdadero o no dentro
de los corchetes
if(condicion) {
codigo
codigo
codigo
}
*/



/*
let edad = 20;

if(edad >= 18) {
    document.write("Eres mayor de edad, puedes votar");
} else{
    document.write("Lo siento, eres menor de edad y no puedes votar.");
}

sale en la pantalla blanca y no en consola 
Eres mayor de edad puedes votar
document.write("") es para poner el mensaje que arrojara
la pagina blanca y no la consola

-if(condicional){document.write("")} despues de un if, pones el texto que saldra
si es positiva la condicional, pero no saldra nada si no se cumple
-else{document.write("")} despues del corchete de if, pones dentro del corchete
otro document.write con lo que saldra de no cumplir 
*/




/*
let edad = parseInt(prompt('Ingresa tu edad'));

const edad =; tambien es posible de usar const, incluso es 
mejor si es que el dato nunca cambia, como la edad en un registro


if(edad >= 18) {
    document.write("Eres mayor de edad, puedes votar");
} else{
    document.write("Lo siento, eres menor de edad y no puedes votar.");
} 
*/




//else if, otra condicional, va despues de if
//else es la ultima condicional, va al final


let edad = parseInt(prompt('Ingresa tu edad'));

if(edad >= 18 && edad <30) {
    document.write("Eres un joven");
} else if(edad >= 30 && ead <60){
    document.write("Eres un adulto");
} else if(dead >= 60) {
    document.write("Eres un adulto mayor");
} else {
    document.write("Eres un nino"); //else no lleva parentesis, solo corchete
}


