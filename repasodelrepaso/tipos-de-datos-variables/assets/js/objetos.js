let miObjeto = {
    //pares de clave valor; un objeto es un contenedor de información, de diferentres datos
    nombre: "Javier Santiago"
}


let nombre = "Javier Santiago";
let edad = 25;
let direccion = "Chimalhuacan, México";
let numero = 5252525252


console.group(nombre);


/*
los objetos permiten tener varios dato, es una funncion coon muchos datos
{} es objeto
[] es arreglo

let persona = {

    nombre: "Carlos Eduardo",             //Usar comas para separar los datos 
    edad: 31,
    dirección: "Villahermosa, Tabasco",
    numero: 2131231231


};

console.log(persona); //nos da todos los datos que tenga persona
console.log(persona.nombre); //pedimos un dato especifico, en este caso el nombre
*/




/*Es posible incluir objetos dentro de objetos, tambien puede contener funciones
let persona = {
    nombre:{
        apellidopaterno: "Pérez",
        apellidomaterno: "Santiago",
        nombre: "Javier de Jesús"
},  

    edad: 25,

    dirección:{
         ciudad: "Chimalhuacan", 
         estado: "México",
},
    numero: [
        25252525252,
        25252525252
        ]
}
console.log(persona.nombre); //pido mostrarme lo que contenga nombre dentro de persona.
*/



/*
arreglo vs conjuntos
arreglo: datos variados y conjuntos
conjuntos: datos especificos
*/
//console.log(persona.sumar(4,5));



/*Ejercicio*/

let Tenis = {
marca:{
    Jordan:{
        Talla:[
            26,
            28,
            30],
        color:[
            "negro",
            "blanco",
            "rojo",
            "azul"
              ],
        precio:[
            1000,
            2000,
            3000
               ]
           },

    Nike:{
        Talla:[
            26,
            28,
            30],
        color:[
            "negro",
            "blanco",
            "rojo",
            "azul"
              ],
        precio:[
            1000,
            2000,
            3000
               ]
        },

    Converse:{
        Talla:[
            26,
            28,
            30],
        color:[
            "negro",
            "blanco",
            "rojo",
            "azul"
              ],
        precio:[
            1000,
            2000,
            3000
               ]
            }
     }      };


     console.log(Tenis.marca.Jordan.color[3]) //el [3] idica la posición en el arreglo