//Operadores

/*Aritmeticos:

+
-
/
*
%; residuo de una operación
()

*/


let operacion = 3 * 5 + (10-5);
console.log(operacion); //20


let operacion2 = 3 - 5 / 2 * 4; //investiga
console.log(operacion2); // -7





/*operadores relacionales
no da resultado numero da un boolean, true o false
<,>, >=, <=, ==, ===, !=, !==
*/

console.log (7<7);//false, no estamos incluyendo el nuermoa comparar

console.log (7<=7);//true, incluyendo el numero a comparar


console.log(7 == "7");// true: compara el valor, pero no el tipo de dato
console.log(7 === "7"); //false: compara valor y tipo de dato


console.log(7 != "7"); //false: solo compara el valor
console.log(7 !== "7");// true: compara primero el tipo de dato, es true porque el tipo es diferente




/*Incremento y decremento
+=, -=, *=, /=
*/

let incremento= 5;
incremento += 5;// se traduce como: incremento = incremento + 5
console.log(incremento); // da 10


incremento -= 5; //traduce como: incremento = incremento -5
console.log(incremento); // da 5 porque previamente sumamos 5

incremento *= 5; //incremento = incrememento * 5;
console.log(incremento); //25

incremento /= 5;// incrememetno = incrememento /5;
console.log(incremento);//5


/*Operador unario 
++, --
sumar uno, restar uno

*/


let sumar = 0;
console.log(sumar); //da 0
sumar++;
console.log(sumar); // da 1
sumar++;
console.log(sumar); // da 2, por el previo 1
sumar--;
sumar--;
console.log(sumar); //da 0 porque restamos dos uno
sumar--;
console.log(sumar); //-1



/*for (let i = 0; i<10; i++){
    //codigo
  };  */









/*
++variable: habla de un preincremento -primero modifica el valor y ya despues hace uso de la variable
variable++= postincremmento - usa la variable y despues hace el incremento

en i hacemos uso de postincrememnto porque que queremos que use al 0 primero y luego lo modifique
*/


let num = 5;
console.log(num++); // muestra la variable original pero le esta haciendo un incremmento y ahora es 6
console.log(num);//ahora vale 6

console.log(++num); //primero hace la operacion y despues te muestra el valor//directo te debe mostrar 7




