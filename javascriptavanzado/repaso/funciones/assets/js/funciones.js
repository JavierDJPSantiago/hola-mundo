/*
Funcion
Es un bloque de código reutilizable
Puede tener o no parametros de entrada
Puede volver o no un valor
*/

//suma es el nombre de una variable, sumar es el nombre de la funcion

function sumar (numero1, numero2){           //en parentesis va lo que tomara, este nunmero1 y numero2 no es una variable es solo numeros que pediremos, pueden llamarse n1 y n2, vacio es cualquier valor o muchos
    
    //operaciones o código a ejecutar
    return numero1 + numero2;       //esto es lo que saldra,
    console.log("hola desde la función")
    //tambien aqui numero1 y numero 2 no son variables solo son numeros que pedimos pueden llamarse n1 y n2
}
// usamos return para decir que saldra de resultado y debido a que return saca el resultado de la funcion. es lo ultimo que se debe poner porque despues de el ya no se ejecuta nada


let numero1 = parseInt(prompt("numero1"));
let numero2= parseInt(prompt("numero2"));
let suma = sumar (numero1, numero2) 
//aqui estamos haciendo referencia a la variable numero1 y numero2, por eso los ponemos como sumar (numero1, numero2), a la vez le estamos dando los valores que pide la funcion arriba


document.write(`la suma de ${numero1} y ${numero2} es ${suma} <br>`);
document.write("La suma de " + numero1 + " y " + numero2 + " es " + suma);

//backstick: comillas invertidas, habilita el uso de texto, string y el uso de javascript,  para usar template string, tambien podemos usar codigo html
//template string:el ${} es para hacer referencia a variables, es lo mismo que concatenar pero es mas comodo


/* Puede que no necesitemos el return si la funcion ya tiene algun codigo que lanza el resultado o ya no se ocupara la funcion mas que una vez
function restar (numero1, numero2){
    let resta: numero1 - numero2          
   document.write(`la resta de ${numero1} y ${numero2} es ${resta});
    
}
*/
