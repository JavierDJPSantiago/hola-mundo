const numeros = [1,3,13,23,253,123,6865,812,123,152,222];

//forEach edice que tiene una funcion anonima, fijate que function no tiene nombre
//for each era para que hiciera la funcion con todos los elementos; la palabra numero representa a cada uno de los valores, no es una variable ni un valor
//la coma despues de numero + "," es para que separe los numeros con comas y no los amontone
/*forEach(function (numero): function tiene diferentes posciones, la primera es el elemento, la segunda el indice */
//agrgar un br causar un salto de línea entre elementos

/*
numeros.forEach(function (numero){
    document.write(numero + ",")

});
*/

/* Lo de arriba es igual que este ciclo for
for (let i= 0; i< numeros.length; i++){
    document.write(`${numeros[i]}<br/>`);
}
*/

/* formma arrow

numeros.forEach(numero => {
    document.write(numero + ",");

});
*/



//otro tema
//map, para crear un nuevo arreglo aparatir de un arreglo existente; 
//util para clonar un arreglo para no modificar el original
//return elemento * 2, podemos clonarlo y a la vez hacer una operacion con los elementos 

let numeros2 = numeros.map(function (elemento){
    return elemento;
});

document.write(`<br>` + numeros2);


//otro ejemplo de map

/*lo que hace map
let frutas = ["mango"+"uva"+"piña"];
let frutas2 = frutas;

document.write(`<br>` + frutas + `<br>`);
document.write(`<br>` + frutas2 + `<br>`);


frutas2.push = ("pera"); //agrego pera en ambos arreglos, debido a que el igual es para ambos lados
document.write(`<br>` + frutas + `<br>`);
document.write(`<br>` + frutas2 + `<br>`);
*/


/*
let frutas = ["mango"+"uva"+"piña"];
let frutas2 = frutas.map(function(elemento){
    return elemento;
});

document.write(`<br>` + frutas + `<br>`);
document.write(`<br>` + frutas2 + `<br>`);


frutas2.push = ("pera"); 
document.write(`<br>` + frutas + `<br>`);
document.write(`<br>` + frutas2 + `<br>`);
*/






/*Includes: para saber si estaincluido un elemento o no, nos da un verdadero o un faslo */


document.write(`<br>` + numeros.includes ("hola")+ `<br>`); //dice falso porque no esta










/*filter: para filtrar un arreglo dependiendo de como le digamos*/
//elemento % 2 ==0 dividelo entre dos y si el residuo es 0 regresame un true, osea que el valor fue aprobado y ahora le pedimos que nos muestre a numerosPares donde solo se mostrara a los numeros que si cumplen

let numerosPares = numeros.filter((elemento) =>{
    /*if(elemento % 2 == 0){
        return true;
    } else {
        return false
    }*/
    if(elemento > 10){
        return true;
    }
});

document.write(`<br>` + numerosPares + `<br>`)








/*
//includes tambin aplica aqui para decir si tiene un valor un arreglo o tiene un string
//podemos omitir el ==true es porque ya lo obvia if
let frutas = ["mango","uva","piña","mandarina","manzana","aguacate","fresa","sandia"];

let frutasFiltro = frutas.filter((fruta) =>{
    
    /*forma sencilla
    if (fruta.includes ("m") == true ) {
        return true;
    }
    */
    
    /*forma compleja pero es igual
    return frutas.includes("m");//
});

document.write("<br>" + frutasFiltro +  "<br>");
*/









/*
//uso de toLowercase, para transformar lo que recibe en minusculas
//lo usamos porque ahora tiene elementos con lestras mayusculas a inicio y nosotros pedimos que revise si tiene una letra en minuscula
//el mismo caso con toUpperCase para convertir minusculas a mayusculas


let frutas = ["Mango","Uva","Piña","Mandarina","Manzana","Aguacate","Fresa","Sandia"];

let frutasFiltro = frutas.filter((fruta) =>{
    
    return frutas.toLowercase().includes("m");
});

document.write("<br>" + frutasFiltro +  "<br>");
*/












// sort; no usarlo, ordena como si fueran string, ordena raro; sort muta el arreglo, cambia su orden original, lo modifica desde raiz

let otrosNumeros=[9,2,3,5,1,4,8,6,7];
/*
document.write ("<br>" + otrosNumeros.sort () + "<br>");*/

/*Reverse invierte el orden de los elementos de un arreglo; aqui no salio al revez porque sort lo muto*/
//una vez comentado sort ya nos muestra el orden inverso
document.write("<br>" + otrosNumeros.reverse () + "<br>");













//find; se parece a filter, pero este solo obtiene el primer elemento que cumpla con una condicion
let frutas = ["mango","uva","piña","mandarina","manzana","aguacate","fresa","sandia"];

let frutaEncontrada = frutas.find((elemento) =>{

    return elemento.includes("ma");

});

document.write("<br>" + frutaEncontrada +  "<br>");