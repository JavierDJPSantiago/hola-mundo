//Programacion orientada a objetos, POO

//Clases, molde que nos permite crear objetos; siempore el nombre de la clase empieza en mayusculas como Animal
//constructor es una funcion que se inicia cuando creamos nuestra clase 
//function no esta permitido dentro de class
//tampoco las palabras let, var, solo escribimos el nombre de la variable 
//constructor lleva parametros 
//this.(parametro): hace referencia a una variable que se crea intermanemte cuando nosotros creamos una funcion, hace referencia al contexto en el que se esta utilizando; this, nos dice que la varibale nombre = al parametro nombre, solo nos estamos ahorrando ponerlo arriba, pero tambien evita que de error, porque nombre=nombre tiene el mismo nombre 
//las variables nombre y especie, no existen en el constructor, por eso las referenciamos en this. 
//Siempre deben tener variables las clases en Java, em JS no es necesario


class Animal{
    nombre; //primera varibale
    especie;//segunda variable

    constructor(nombre, especie){
        this.nombre = nombre;
        this.especie =especie;
    }


    //Getters y Setters
    //en el constructor se ponene los valores iniciales, si tu necesitas recuperar los valores o cambiarlos necesitas los metodos get y set
    //get + variable de la que obtendra el valor
    //solo tienen este porposito de Leer o modificar el atributo
    //simepre un get y un set por variable
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getEspecie(){
        return this.especie;
    }

    set setEspecie(especie){
        return this.especie;
    }


    //metodos == funcion; podemos hacer nuestras propias funciones, no pongas function
    presentarse(){
        document.write(`Hola soy ${this.especie} y me llamo ${this.nombre} <br>`);

    }

    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`
        return mensaje;
    }

    //metodos estáticos
    //es un metodo que se puede ejecutar sin necesidad de que se cree un objeto
    //Pertenece sólo a la clase y no se hereda a los objetos, no se le puede dar a los objetos creados, solo se pueden invocar con el nombre de la clase
    saludar(){
        return console.log("Hola, soy un método estático");
    }
};
//metodo estatico: llamo a la calse y escribo el metodo
//Animal.saludar();//no de finido

console.log(Animal.getNombre);//undefined porque no a obtenido valores de nada

//new es crear un nuevo objeto, invocamos la clase Animal que es el plano y se crea un objeto; lleva los parametros que establecimos arriba
const Animal1 = new Animal("Scooby","Perro");
console.log(Animal1);//nos muestra que se creo un objeto llamado Animal {}//Ahora nos muestra Animal {nombre: 'Scooby', especie: 'Perro'}
//instanciar = hacer una copia, crear un objeto

const Animal2 = new Animal ("Pecas", "Gato");
console.log(Animal2);//Animal {nombre: 'Pecas', especie: 'Gato'}

const Animal3 = new Animal ();
console.log(Animal3);


//hacer uso del objeto
//llamamos a mi objeto creado y le agregamos el metodo 
Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();


//metodo para cambiar de nombre sin clase
console.log(Animal1.nombre);//muestra Scooby
Animal1.nombre = "Scrapy";
console.log(Animal.nombre);
console.log(Animal1);


//Cambiar nombre con el metodo de una clase
document.write(Animal1.cambiarNombre("Oddie"));




//Getters y Setters
//get = obtener el valor de una variable
//set = fijar o cambiar el valor de un Atributo



//Getter y setter
//get= obtener el valor de un atributo
//set = fijar o cambiar el valor de un atributo

console.log (Animal1.getNombre);
Animal1.setEspecie = "Manchas";
console.log (Animal1.getNombre);
console.log(Animal1);


console.log (Animal1.getNombre);//obtuvimos el valor del nombre
Animal1.setNombre = "Manchas";//cambiamos el nombre
console.log (Animal1.getNombre);//ahora se llama manchas
console.log(Animal1);

