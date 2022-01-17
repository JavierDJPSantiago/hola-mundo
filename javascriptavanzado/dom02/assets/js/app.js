//document.     se refiere a que accedemos al html
// let $titulo = document.getElementById("titulo"); $indica un elemento del dom, no es necesario pero para buenas practicas y buenas indicaciones es necesario, aunque funciona igual 

/*
let titulo = document.getElementById("titulo");
titulo.textContent  = "Titulo escrito desde JS";
*/






//document.querySelector; Similar al document.getElementById, pero puede llamar id y clases. No puede llamar a multiples elementos, solo llama al primero que le indiquemos
let $titulo = document.querySelector("#titulo");
$titulo.textContent = "Titulo escrito desde JS"



let $parrafo = document.querySelector("p");
console.log($parrafo.textContent);// parrafo uno; porque selecciono el primer p






//document.querySelectorAll llama a todos los elementos con el mismo nombre
let $parrafos = document.querySelectorAll("p");
console.log($parrafos)
console.log($parrafos[1].textContent); //tomamos todos esos elementos similares como un arreglo, si queremos seleccionar alguno, escribimos la paosicion del elemento, como tenemos dos p, para seleccionar el segundo ponemos [1], por que contamos desde 0.




/*Creacion de elementos*/
//document.querySelectorAll crea un documento en memoria(p, h2, etc en el html original), pero no esta insertado en el documento html, es util para modificar sus caracteristicas y contenido antes de insertarlo
let subtitulo = document.createElement ("h3");
subtitulo.textContent = "Este es un subtitulo desde JS";

document.body.append(subtitulo);//para inserta el documento creado







let $contenido = document.querySelector("#contenido");


/*
//console.log($contenido.textContent = "Hola"); //borro todo y solo se ve hola
console.log($contenido.textContent); //solo muestra el texto, pero no el contenido
console.log($contenido.innerHTML); //nos muestra todo el contenido del div, incluyendo texto y p//tambien permite recuperar la info o remplazar
*/



/*
console.log($contenido.textContent = "<br>"); //no da el salto de texto, solo se puede agregar texto con textContent
console.log($contenido.innerHTML = "<br>"); //si dal el salto de linea, podemos agregar texto o elemento HTML
*/


/*
console.log($contenido.innerHTML = "Hola");//modifica a los hijos, modifico lo que esta dentro del p
console.log($contenido.outterHTML = "Hola");  //modifica al padre, modfica todo el div pero borra todo  
*/





let contenidoParrafo = document.createElement("p"); //creo un p
contenidoParrafo.textContent = "Contenido de mi nuevo parrafo"; //le doy texto al p
$contenido.appendChild(contenidoParrafo);//se lo incluto a contenido y lo vuelve un hijo, que se volvio el hermano del anterior p, por eso lo coloca al final por ser el nuevo hermano




//linea 38
//document.body.append; agrega un elemento dentro del body al final
//document.body.insertAdjacentElement("beforebegin",subtitulo);//insertar el elemento subtitulo al incio

//linea 15
$titulo.insertAdjacentElement ("afterend",subtitulo);// despues del final del elemento, subtitulo es la varible hecha
//beforeend es lo mismo que append child



$titulo.remove();//elimina un elemento
