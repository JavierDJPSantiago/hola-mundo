/* Flujo es el orden en el que se ejecutan las declaraciones que escribimos 

let miVariable = 10;     //este primero
console.log(miVariable); //este segundo
// si fuera al revez da error


let edad = 17;
let tienesINE = true;
*/





/*If es de control de flujo, por que ejecuta y comprueba por pasos

if(edad >= 18 && tienesINE == true){

    console.log("Puedes entrar")
}  else{
    console.log ("No puedes entar")
}
*/






/* Otra forma de hacer un if
-Operador ternario 

-ternario por tener tres partes:
-solo usarlo cuando se tenga una sola condicion, no mas como if else*/

/*
(condicion a evaluar)? se ejecuta si es verdadero: se ejecuta si es falso 
*/

/*
let edad1 = 18;

(edad1 >= 18)    //se puede usar sin parentesis (edad1 >= 18)
? console.log("Mayor de edad") 
: console.log("Menor de edad")
*/

/*otra fora de hacer el ternario, para darle un nombre al ternario y poder llamarlo

let edad1 = 17;

let pregunta = (edad1 >= 18)
? "Mayor de edad" 
: "Menor de edad";

console.log(pregunta);
*/






/* COMPLEJO
let preguntaEdad = 'Tengo ${edad1} años y soy ${(edad1 >=18): "Menor"} de edad';
*/








//otra forma de if
/*
Domingo-0
lunes-1
martes-2
miercoles-3
jueves-4
viernes-5
sabado-6
} 
let dia = 0;

let (dia === 0)
{
    console.log("Domingo");
} if (dia === 1)
{
    console.log("Lunes");
} else if(dia === 2)
{
    console.log("Martes")
}  else if(dia === 3)
{
    console.log("Miercoles")
}  else if(dia === 4)
{
    console.log("Jueves")
} else if(dia === 5)
{
    console.log("Viernes")
} else if(dia === 6)
{
    console.log("Sabado")
} else{
    console.log("Ese no es un día")
}
*/





//otra forma con el ejercicio de arriba
//tambien para solo una variable, sin rangos
/*switch(variable a evaluar){
    caso valor:
          -codigo a ejecutar-
    break;
    case valor:
          -codigo a ejecutar-
    break;

    deafault:
          -codigo a ejecutar si sale de las opciones (no cumple)
    break;
} 
*/







//los break es para que no se ejecuten mas cosas

let dia = 5;

switch(dia){
    case 0:
        console.log ("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    deafault:
        console.log("No es un dia valido");
        break;

};







/*Otra forma de switch con dos variables, una no definida*/

let cuponDescuento = "oro"; //toma a esta variable
let descuento;    //no definida pero le dara valor el switch

console.log(descuento); //me da indefinido porque descuento aun no toma un valor

switch(cuponDescuento){
    case "Bronce":
        descuento = 5;
        break;
    case "Plata":
        descuento = 10;
        break;
    case "oro":
        descuento = 15;
        break;
    deafult:
        console.log("Cupón erróneo");
        break;
};

console.log(descuento); //me da 15 porque ya se ejecuto el switch y ahora tiene un valor