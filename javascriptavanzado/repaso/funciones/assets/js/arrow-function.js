/* Arrow function
o Función de flecha
Manera diferente de delcarar (hacer) funciones*/

/*
//forma comun, tiene la ventaja que se puede llamar antes de ser declarada (hecha)
function sumar (numero1, numero2){          
   return numero1 + numero2;
    
};
*/

//forma arrow, desvenataja, no se puede llamar antes de ser declarada (hecha), es lo mas reciente
//se puede usar let pero la funcion no cambia y se debe guardar por eso const
const sumar = (numero1, numero2) =>{
    return numero1 + numero2;
}

let numero1 = parseInt(prompt("numero1"));
let numero2= parseInt(prompt("numero2"));
let suma = sumar (numero1, numero2) 

document.write(`la suma de ${numero1} y ${numero2} es ${suma} <br>`);

