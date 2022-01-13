let arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let suma = 0;

for (let i = 0; i<arreglo.length; i++){
    suma = suma + arreglo[i];
    //suma += arreglo[i];   esto es igual, += suma el numero anterior con el siguiente
};

document.write("Este es el arreglo: " + arreglo + "<br>")
document.write("La suma de los 20 números es: "+ suma + "<br>");
document.write("El promedio de los números es: " + suma/arreglo.length + "<br>");