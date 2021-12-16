/*
Arreglos, son una coleccion de elemntos
*/


const arreglo1 = [4, "hola", true, [1, 2, 6]];
console.log(arreglo1);



const arreglo2 = Array.of(1, "Hola", true)
console.log(arreglo2)


const arreglo3 = new Array(3, true, "adios");



const frutas = ["manzanas", "naranjas", "uvas", "sandias", [1, 2, 3, 4, 5,[A, B, C]]];


console.log(frutas[1]);

console.log(frutas[3])

console.log(frutas[4])

console.log(frutas[4][4]);

console.log(frutas[4][5]);

//Metodos
/* Length = Longitud */
const letras = ["A", "B", "C", "D"];
console.log(letras.length)

/* push 
*/
letras.push("E")
console.log(letras)

/* pop = elimina el ultimo elemento anadido 
*/
letras.pop()
console.log(letras);

/* 
unshift = agrega un elemnto al incio*/
letras.unshift(1);
console.log(letras); 

/*shift= elimina el primer elemento */
letras.shift()
console.log(letras);


