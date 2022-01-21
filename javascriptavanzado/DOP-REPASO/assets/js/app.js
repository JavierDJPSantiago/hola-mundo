class Animalito{
    constructor(nombre, edad, especie, revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        //Para colocar valores de parametros sin que sea necesarios escribirlos en el objeto ni el el contructor, solo es necesario en el this y apareceran por defecto si el usuario no los escribe
        //this.revisado = false;
        this.revisado = revisado//cambiado para el metodo de corto cicuito, igual se agrego a los parametros del contructor;
        this.enfermo = false;

    }

    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}`)
    }
}
/*
const Animalito1 = new Animalito ("Manchas", 5 , "Perro");
console.log(Animalito1);//nos muestra los datos mas enfermo y revisado false
*/



class Veterinario{
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];

    }

    agregarPacientes(paciente){
        this.listaPacientes.push(paciente);//se agregaran a la listaPacientes
        this.cantidadPacientes +=1;//cada que se agregue se suma 1
        let mensaje = `Paciente agregado <br>`;//una funcion cualquiera con un texto
        return document.write (mensaje);//que se muestre esa funcion al usar este metodo
    }
    //un metodo dentro de otro metodo
    modificarPacientesRevisados(pacientesRevisados){
        this.pacientesRevisados++;
    }

    //mostrar si estan enfermos o revisados
    revisarPaciente(paciente){
    if(paciente.revisado === false){
        paciente.revisado = true;
        this.modificarPacientesRevisados();//llamando otro metodo de esta misma clase this.pacientesRevisados++;

        this.pacientesRevisados++;
        document.write("<br>Paciente ha sido revisado");
    }
    else{
        document.write("Este paciente ya fue revisado");
    }
    }
    //metodo para que se muestre la lista
    mostrarLista(){
        for(let i = 0; i<this.listaPacientes.length; i++){
        //[i].nombre; indicamos que queremos accedere a una posicion del arreglo
        document.write(" " + this.listaPacientes[i].nombre);
        }
        document.write(`<br> Cantidad de pacientes: ${this.cantidadPacientes} <br> Pacientes revisados: ${this.pacientesRevisados}`);
    }
    
    
}

//objeto creado para poder usar el metodo que contiene la clase que lo creo
const VetrinariaPanchito = new Veterinario ();

//const Animalito1 = new Animalito ("Manchas", 5, "Perro");
const Animalito1 = new Animalito ("Manchas", 5, "Perro",true);//agregado false o true; cambiara el if y el else

const Animalito2 = new Animalito ("Galleta", 2, "Gato");

console.log(Animalito1);
console.log(Animalito2);

//usamos el objeto creado, usamos el metodo que contiene y agregamos uno de los objetos creados con la clase Animalito
VetrinariaPanchito.agregarPacientes(Animalito1);//muestra paciente agregado

VetrinariaPanchito.agregarPacientes(Animalito2);

console.log(VetrinariaPanchito.listaPacientes);//muestra que se agregaron en la lista en forma de arreglo

VetrinariaPanchito.mostrarLista();

VetrinariaPanchito.revisarPaciente(Animalito1);
VetrinariaPanchito.mostrarLista();



//operador de corto circuito; nos permite dejar un valor por defecto en caso de que el ususario no ingrese un valor o el valor sea negativo
let variable =0;
console.log ()