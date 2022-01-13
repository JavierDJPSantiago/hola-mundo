/*Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado
 */


let precio = parseInt(prompt("Escriba el precio del producto"))
let cuponDescuento = prompt("Escriba el cupón"); 
let resultado;
let total;     


switch(cuponDescuento){
    case "Bronce":
        resultado = precio*.05;
        break;
    case "Plata":
        resultado = precio*.10;
        break;
    case "oro":
        resultado = precio*.15;
        break;
    case "platino":
        resultado = precio*.25;
        break;    
    deafult: result = 0
        document.write("Cupón erróneo");
        break;
};

total = precio - resultado;
document.write("Precio inicial: "+"$" + precio +"==>");
document.write("Descuento: " + resultado + "%" + "==>");
document.write("Total: "+ "$" + total);
