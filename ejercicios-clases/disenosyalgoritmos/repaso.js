/* arreglos
*/

const comidas = ["pozole", "quesadillas", "tacos"]

/* 
length= longitud, numero de elementos en el corchete, va dentro de console.log
*/

console.log(comidas.length); 

/*
push=colocar un nuevo elementos al final del arreglo
pop=quitar el ultimo elemento al final del arreglo
unshift=colocar al incio del arreglo un elemento
shift= eliminar el valor que esta en el inicio del arreglo
*/// estos cuatro solo poner el nombre del arreglo un punto {.} y luego poner el comando

comidas.push("Torta");
console.log(comidas);

comidas.unshift("Pancita")
console.log(comidas);

comidas.pop();
console.log(comidas);

comidas.shift();
console.log(comidas);



console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);

comidas.forEach(function (el) {
    console.log(el);
})

const numeros = [1,4,7,8];
console.log(numeros);

numeros.forEach(function(el){
    let suma = el + 1;
    console.log(suma);
})

console.log(numeros);

/* ejercicio*/

const arr = [];

function suma(num){
    let sumNum = num + 1
    return arr.unshift(sumNum);
}

suma(3);
suma(5);
suma(6);
suma(78);

console.log(arr);