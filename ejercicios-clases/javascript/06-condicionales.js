/*condicionales

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



-if(condicional){document.write("")} 
-else{document.write("")} 
*/



/*

let edad = parseInt(prompt('Ingresa tu edad'));

const edad = 18

if(edad >= 18) {
    document.write("Eres mayor de edad, puedes votar");
} else{
    document.write("Lo siento, eres menor de edad y no puedes votar.");
} 

*/







let edad = parseInt(prompt('Ingresa tu edad'));

if(edad >= 18 && edad <30) {
    document.write("Eres un joven");
} else if(edad >= 30 && ead <60){
    document.write("Eres un adulto");
} else if(dead >= 60) {
    document.write("Eres un adulto mayor");
} else {
    document.write("Eres un nino");
}


