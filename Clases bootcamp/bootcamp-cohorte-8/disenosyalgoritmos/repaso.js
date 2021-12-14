/* arreglos
*/

const comidas = ["pozole", "quesadillas", "tacos"]

/* 
length= longitud, numero de elementos en el corchete, va dentro de console.log
*/

console.log(comidas.length); //dice 3

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

comidas.pop();//no pones nada porque solo pides que lo borre, no sabes cual es
console.log(comidas);

comidas.shift();//lo mismo que pop
console.log(comidas);

/*
forEach-nos puede servir para realizar una accion por cada elemento de nuestro arreglo
*/

console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);

comidas.forEach(function (el) {//forEach: para decir que modificaras todos los componentes. el es una funcion anonima, se refire a todos los elementos del corchete por eso se lo damos de parametro al function
    console.log(el);
})//nos permite hacer una accion a todos los elementos del arreglo

const numeros = [1,4,7,8];
console.log(numeros);

numeros.forEach(function(el){
    let suma = el + 1;
    console.log(suma);//para observar que le hizo la funcion al arreglo numeros
})

console.log(numeros);//siempre console para observar todo

/* ejercicio*/

const arr = [];

function suma(num){
    let sumNum = num + 1
    return arr.unshift(sumNum);// le decimos que todo lo anterior se lo aga a arr
}

suma(3);
suma(5);
suma(6);
suma(78);

console.log(arr);/*agregamos pero a la vez sumamos los elementos al arreglo, pero con unshift los pone al reves
de abajo pa arriba, con push se ponen como nosotros lo enlistamos*/