/*Tomar los números de un arreglo llamado 'numeros', [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento del arreglo 'resultado'
*/



const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
console.log(numeros);

let resultados = []; 

numeros.forEach(function(el){
    let multiplicacion = el * 2
    return resultados.push(multiplicacion);
})
console.log(resultados); 


for (let i = 0; i < resultados.length; i++){
    console.log(resultados[i])
   
}











//el ciclo en si es solo para imprimir cada elemento de un arreglo, sin que tengamos que llamarlo nosotros con los corchetes
//en for ahora ponemos resultados.length porque queremos ver esos resultaso en ciclo
//el [i] es para que solo me muestre un valor del ciclo y no todos. si no lo ponemos nos mostrara todos los valores
//let te dice desde que espacio contara en este caso 0
// la funcion i, te dice el limite del ciclo, en este caso i debe ser menor al numero de posciones del arreglo que son 9 empezando desde 0
//i ++, para que no se siga ciclando y de 9, lo que hara que no se muestre por que solo son 9 
//nan es porque al decir <= el igual toma a la posicion 9 que no existe esta vacia, solo tenemos 8 posiciones del 0-8, si son 9 Xd pero son 8, por que cuenta desde el 0 y recuerda que al 0 lo vuelve 9 por el ++