/*
ciclos-bucles-loops

while
do while
for
*/

/*while
*/

/*
let condicion = 1; // valor inicial

*while(condicion){
    tu codigo
    modificacion a nuestro valor incial
}
*/

//imprimir todos los numeros del 1-10, el while lo permite

/*
let condicion = 1;

while(condicion <= 10){
    condicion++
    console.log(condicion); //esto es poner un condicion =  condicion + 1
}
*/

/*el while es un mientras
imprime el valor mientras la condicion sea verdadera, empieza desde el 1, por que es el valor de condicion
la consola lo hara hasta el 10, por que le pedimos hasta el 10
es util para no estar escribiendo una variable con el valor 1 hasta el 10(en este caso), y que la maquina lo haga por uno
 */





/*
let numero = 1;
numero++;//2           esto de numero++ o numero-- es la forma resumida de numero= numero + 1 o numero= numero - 1, pero solo agregamos o quitamos un uno
numero++;//3
numero++;//4
numero--;//3
numero--;//2
numero--;//1
console.log(numero)
*/

/*
//ciclo while
let condicion = 11;

while(condicion <= 10){
   
    console.log(condicion); //como no se cumplio no se imprimio, primero revisa y luego imprime
    condicion++
}
*/

/*
//ciclo do while
let numero = 11;
do{
    console.log(numero); //se ejecuta solo una vez y luego comprueba si ese valor cumple, primero imprime el valor y luego comprueba
    numero++;
} while (numero <=10);
*/



/*
//ciclo for, debemos especificar donde inicia y donde termina, este checa 3 cosas, el valor, si cumple y el ++
//es como while, si no cumple no lo muestra

for(let control = 1;control <=10; control ++){
    console.log(control);//mientras se cumpla eso, se mostrara en este caso
}
*/


/////el ++ es para que la consola sume un mas 1 al valor y no se cicle todo y se trabe

const comidas = ["pozole", "tacos", "tamales", "tortas"];

for(let i = 0; i <= comidas.length; i++){
    console.log(comidas);//se imprime 5 veces, porque empezamos desde el 0 esto no habla de posiciones y por <=0 tambien cuenta al 4 como posiciones, esto si es de elementos de arreglo

}
//como suma 4 con el ++, no puede ser igual a 4 porque no existe esa posicion y solo tiene 3 posiciones desde el 0
//con valor 0 empieza desde el inicio