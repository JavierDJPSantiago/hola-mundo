let $btnGato =document.querySelector("#btnGato");

/* Forma sin arrow
$btnGato.addEventListener("click", () =>{
    
    resp => resp.json()

    function (resp){
        resp.json()
}*/






//Api de gatos
//peticions http con fetch
    //se le (then)hasta que el fetch responda algo, la respuesta la conviertas a un json, solo (then)hasta eso mostraremos la data

$btnGato.addEventListener("click", () =>{
    
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(resp => resp.json ()).then(data => {
        console.log(data);

        let imagenGatito = document.createElement("img");
        imagenGatito.src = data[0].url;//la documentacion indica que estan en un arreglo con url
        document.body.appendChild(imagenGatito);//añadiremos al body
    })
});


$btnGato.addEventListener("click", () =>{
    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp => resp.json ()).then(data => {
        console.log(data);

        let imagenGatito = document.createElement("img");
        imagenGatito.src = data.message;//estan contendidas en el elemento message
        document.body.appendChild(imagenGatito);
    })
});