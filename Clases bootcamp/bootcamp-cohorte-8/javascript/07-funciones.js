/*
Las funciones nos sirven para escribir bloques de codigo que
se pueden reutilizar


*/



/*
let numero1 = 10;
let numero2 = 20;
let suma = numero1 + numero2
//document.write(suma);
document.write('<h1>'+ suma + '</h1>');//codigo del profe que veremos despues
pero te permite escribir codigo html en javascript


let numero3 = 23;
let numero4 = 2132;     
let suma2 = numero3 + numero4;
//document.write(suma2);
document.write('<h1>'+ suma2 + '</h1>') 
*/




//usar una funcion para no estar colocando todo otra vez:

function sumar (numero1,numero2) {    //aqui le digo que valores toma
let suma = numero1 + numero2          //aqui le digo que hara con ellos
document.write('<h1>'+ suma + '</h1>');
}

sumar(12, 12);//esta es la funcion que llamamos, aqui le damos los valores
sumar(50, 8)
sumar(33, 12);;

