let cadena1 = "Hola";
console.log(cadena1);


//como un arreglo pero te muestra las partes de la palabra
let cadena2 = new String ("Adios"); //objeto string
console.log(cadena2)

/*
//Array (); el parentesis son las posiciones que queremos en ese arreglo

let arreglo = new Array ();
console.log(arreglo);
*/



//usando cadena2

console.log(cadena2.toLocaleLowerCase().includes("a")); //convierte a minuscula para buscar
console.log(cadena2.toLocaleLowerCase());//convierte a minusculas el contenido
console.log(cadena2.toUpperCase());//convierte a mayusculas el contenido







/*cohersion: JavasScript convierte en automatico un tipo de dato en otro
 y conversion:
 */

//ejemplo de cohersion
 console.log(cadena1.toLocaleLowerCase());


 




 /*Hacer una funcion que recibe una palabra y la regresa invertida */
/*
let palabra = "Hola Mundo";
let arreglo = palabra.split("");//convertimos a arreglo, y los "" dice que en cadae espacio de palabras, lo tome como un elemento del arreglo
console.log(arreglo);
console.log(arreglo.reverse().join(""));//join para transformar en array un arreglo
*/




function invertirPalabra (cadena){
    let arreglo = cadena.split("");//convirtiendo la cadena en un arreglo; las ""  son para señalar un punto de partida, le decimos que tome los espacios vacios en cuenta
    arreglo.reverse(); //invirtiendo el arreglo
    let cadenaInvertida = arreglo.join("");
    return console.log(cadenaInvertida);
};
invertirPalabra("Generation");






