/*
variabel var se utilizaba anteriormente, son variables globales, donde yo la ponga
en cualquiero otra parte del codigo que la ponga existira, puede ser llamda desde
cualquier parte del codigo

Variable let es una variable de contexto, solo vive en un bloque de codigo, 
digamos {} solo existe dentro, afuera es como si no existiera
*/
var numero = 40;
console.log(numero);// su valor es 40

if(true) {
    var numero = 50;
    console.log(numero); //su valor es 50
}

console.log(numero);// sera 40 o 50? 50 el nombre de la variable es el mismo y se recorre el valor anterior




//que pasa si en vez de var tenemos let?

var texto = 'Bootcamp Java';
console.log(texto);//Boottcamp Java

if(true){
    let texto = 'Cohorte 8';
    console.log(texto);//cohorte 8
}

console.log(texto);//Cohorte 8 o Bootcamp Java?