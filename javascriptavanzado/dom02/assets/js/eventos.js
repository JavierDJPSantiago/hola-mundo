let $titulo = document.querySelector("#titulo");
let $mensaje = document.querySelector("#mensaje");
let $btnMensaje = document.querySelector("#btnMensaje");
let $spanError = document.querySelector("span");

//Causar eventos a un elemento desde js
//$btnMensaje.addEventListener; eventos desde js

//Estructura =>   "click"(es la acción), function()

//la funcion puede o no ser anonima, si esta declarada no pongas parentesis, si lo pongo la invoco (quiero parametros), pero si no lo pongo solo la referencio(solo quiero lo que se obtiene)

//click al hacer click en una tecla
$btnMensaje.addEventListener("click", () => {
    //console.log("no me presiones")
    
});


/*
//keydown al escribir sobre algo, en este caso sobre mensaje
$mensaje.addEventListener("keydown", (e)=>{
    //console.log("escribiste algo");
    console.log(e.target.value);//ver lo que escribe el usuario
    //console.log(e);//muestra cada letra que escribe

});
*/




//Para validar formularios, aqui dira "el contenido de hide" si no se cumple los de mas de 3 caracteres, se usa la eliminacion y añadido de clases; e es solo un porametro para target.value
$mensaje.addEventListener("keydown", (e)=>{
    console.log(e.target.value);

    if(e.target.value.length < 3){
        $spanError.classList.remove("hide");
        $spanError.classList.add("error");
    }else{
        $spanError.classList.add("hide");
        $spanError.classList.remove("error");
    }
});