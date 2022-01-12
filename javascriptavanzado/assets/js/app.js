let title = document.getElementById("title"); /*pido que en el documento acceda a el id "title"*/ /*reconoce a las paginas como documentos*/

console.log(title);

title.textContent = "Este texto esta escrito desde Javascript"; /*Javascript lo modifico,ahora dice esto el h1*/

let parrafos = document.getElementsByTagName("p"); /*pido los p con Tagname*/
console.log(parrafos)

/*
parrafos.textContent = "Parrafos escritos desde Javascript";
no hace nada porque no le estoy diciendo cual de los parrafos
*/  

/*
parrafos[0].textContent = "Parrafos escritos desde Javascript"; /*ponemos 0 porque lo toma de forma vectorial, comienza contando desde 0*/ /*si queremos cambiar todos los parrafps debemos colocar todos los parrafos
*/


/*
/*Podemos usar un ciclo para cambiar los parrafos
for(let i = 0; i<parrafos.length; i++) {
    parrafos[i].textContent = "Parrafo" + i + "escritos desde Javascript";
} 
*/

let email = document.getElementById("email");

let password = document.getElementById("password");

function getInformation() {
    console.log(email.value);
    console.log(password.value);
}
