let palabraPorInvertir = prompt("Escribe la palabra que deseas invertir")


function invertirPalabra (cadena){
    return cadena.split("").reverse("").join("");
    
};

document.write(`<h2> La palabra original es: ${palabraPorInvertir} </h2>`);
document.write(`<h2> La palabra invertida es: ${invertirPalabra(palabraPorInvertir)} </h2>`);

