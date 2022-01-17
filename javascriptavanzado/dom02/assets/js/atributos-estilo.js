let $titulo = document.querySelector("#titulo");
let $texto = document.querySelector(".texto");




//cambiar id de elemento
$texto.id = "texto"; //le agregamos un id al parrafo texto


//$texto.style="color: red; font-size: 24px";//modificar el estilo, css en js

/*
$texto.className = "bg-purple"; //cambiamos la clase era "texto", paso a ser bg-purple por eso cambio el estilo, porque en css apuntamos a bg-purple
*/

$texto.className = "bg-purple h3";//para agregar varias clases, solo pdas espacio y escribes la otra clase

$texto.classList.add("text-center");// a diferencia de className, classList, puede añadir or remover clases, pero no remplaza las clases que ya estaban

$texto.classList.remove("bg-purple")// removio una clase sin eliminar las demas