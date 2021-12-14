/*
Arreglos, son una coleccion de elemntos, tienen metodos o funciones que nos permiten ordenar o manipular los datos 
almacenados
*/

//el corchete hace que lo tome como arrelgo, manera 1 de hacer arreglos
const arreglo1 = [4, "hola", true, [1, 2, 6]];//es mas sencillo, sin Array pero como usado, podemos meter corchetes dentro del corchete
console.log(arreglo1);

//otra forma de llamar el arreglo, manera 2, las mas nueva

const arreglo2 = Array.of(1, "Hola", true)
console.log(arreglo2)// nos muestra 3 elementos, pero decimos que son dos posiciones porque los vectores se cuentan desde 0, el cero tambien cuenta

//manera 3, poco usada o ya no usada
const arreglo3 = new Array(3, true, "adios");

// recomendado usar const en arreglos, porque se puede perder un dato con let
//arreglos son para agrupar datos

const frutas = ["manzanas", "naranjas", "uvas", "sandias", [1, 2, 3, 4, 5,[A, B, C]]];

//notacion de corchete: quiero ver en la consola lo que tiene el arreglo pero solo un elemento, entonces abro []
console.log(frutas[1]);//fijate, pedimos mostrar el arreglo 'frutas' pero solo el elemento 1, recuerda se cuenta desde 0

console.log(frutas[3])//muestra 'sandias'

console.log(frutas[4])//nos motrara el corchete interior de frutas, mostrandonos su contenido, el corchete es una posicion

console.log(frutas[4][4]);//nos muestra el numero 5 que esta en la posicion 4 del corchete interior, porque volvemos a contar desde 0 dentro del corchete

console.log(frutas[4][5]);//nos muestra el corchete interior del otro corchete

//Metodos
/* Length = Longitud */
const letras = ["A", "B", "C", "D"];
console.log(letras.length)//para que nos diga la cantidad de elemntos dentro de mi arreglo

/* push = anade un elemnto al final de nuestro arreglo// si quiero insertar un elemento dentro de otro arreglo que esta en mi arreglo, especificas el lugar donde se anadira el elemento, frutas[4][4]
*/
letras.push("E")//para agregarlo hasta al final de mi arreglo especificado, fijate que solo coloco el nombre del arreglo sin otra cosa
console.log(letras)//nos muestra que lo agrego y ahora hay 5 elentos

/* pop = elimina el ultimo elemento anadido 
*/
letras.pop()//corchetes sin nada
console.log(letras);

/* 
unshift = agrega un elemnto al incio*/
letras.unshift(1);//pido que agregue un uno
console.log(letras); 

/*shift= elimina el primer elemento */
letras.shift()// no pongo nada solo quiero eliminar el primero sin conocerlo
console.log(letras);


