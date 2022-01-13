//declarar arreglos
/*
const numeros = [5];

let numeros = new Array();
*/

numeros = [1,3,13,23,253,123,6865,812,123,152,222];

document.write(numeros[5])


//Imprimir todos los valores del ciclo
//numeros.length son los valores que tiene el arreglo
for (let i= 0; i< numeros.length; i++){
    document.write(`${numeros[i]}<br/>`);
}


/*i++ es porque el ciclo le ira sumando un uno al i cada que de un ciclo, 
numeros.length en este momento vale 11, por eso le ponemos >11 por que cuando i valga 11, 11 no es menor a 11, por eso se detiene
*/

/*la letra i es una variable que se usa como contador en el for, cada vez que se realiza una ejecución, i va cambiando de valor, (de uno en uno por la expresión i++), cambia valor apartir del 0, por eso el i=0, y asi hasta el 11
 */

/*numero [i]: Por que números es una arreglo y los elementos de los arreglos tienen una posición que comienza desde el 0,
al usar números[3] por ejemplo se esta llamando al elemento que está en la posición 3
 */