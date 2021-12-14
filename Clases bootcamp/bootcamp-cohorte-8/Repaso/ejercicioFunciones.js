/*
Crea una función que calcule el descuento que se le va a hacer a un cliente  según el valor de su compra.  
Si es una compra de menos de 100, se le hará un descuento del 10%. (0-99) Si es una compra de 100 hasta menos de 200 
se le hará un descuento del 20%.(100 - 199) y si es una compra de más de 200 se le hará un descuento del 30%. (200 =>)  
Utiliza prompt, funciones, condicionales y operadores de comparación.  
La función debe pedir el precio al cliente, e imprimir el resultado del precio menos el descuento
 ya sea en pantalla o en consola.
*/


const compra = parseInt(prompt("Ingresa el valor de tu compra")); //1.-Lo que pido al cliente

function precioFinal(compra){//  apertura de corchete de funcion
    if(compra<100){// apertura de corchete para decir que quiero que pase si se cumple este if
        descuentoAplicado = compra * 0.9;//pongo nombre de la funcion de lo que pasara con este if, no necesitas un let porque la if ya es funcion condicional
    }else if (compra>=100 && compra<200){
        descuentoAplicado = compra * 0.8;
    }else if(compra>=200){
        descuentoAplicado = compra * 0.7;
    }
    document.write("<h1>" + "Su total a pagar con el descuento es: " + descuentoAplicado + "pesos" + "</h1>")// Puedes hacer mas docuemnt write para cada funcion del if, pero al llevar el mismo nombre puedes usar un solo document.write
}//cierre del corchete de funcion

// Lo que hare con lo que me dio el cliente



precioFinal(compra)//Tengo lo del cliente y lo que hare con el, pero debo llamarlo