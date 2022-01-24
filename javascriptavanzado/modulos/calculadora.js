const sumar = (numero1, numero2) => {
    return numero1 + numero2;

}

const restar = (numero1, numero2) => {
    return numero1 - numero2
}

const multiplicar = (numero1, numero2) => {
    return numero1 * numero2
}

const dividir = (numero1, numero2) => {
    return numero1 / numero2
}

const mostrarResultado = (operacion, numero1, numero2, resultado) => {
    const respuesta = document.createElement("h3");
    respuesta.textContent = `La ${operacion} del ${numero1} y el ${numero2} es ${resultado}`;
    document.body.appendChild(respuesta);
}

//uso de export
//podemos hacerlo en un solo lugar o uno por uno ejemplo:
/*export const dividir = (numero1, numero2) => {
    return numero1 / numero2
} ponemos export al inicio*/
export {
    sumar, 
    restar, 
    multiplicar, 
    dividir,
    mostrarResultado
}