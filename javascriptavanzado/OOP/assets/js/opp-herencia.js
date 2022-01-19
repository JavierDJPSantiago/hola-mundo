class Pokemon {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    //metodos
    atacar(){
        return console.log(`${this.nombre} esta atacando.`)
    }

}






//extends; de la clase se esta extendiendo para obtener esos valores de la clase Pokemon; ahora tiene los valores de la clase pokemon. 
//Sin meter contructor toma todos los datos del contructor de Pokemon (lo  toma inplicito). Si escribimos constructor, se va a cambiar el contructor de pokemon que tenia por otros valores
//super es para usar los parametros del contructor de la clase pokemon, o el constructor como tal
//tienes que volver a poner los parametros de la clase padre, mas los que quieras agregar
//solo agregas un this.edad porque ya tienes los otros this en la clase Pokemon
class Pikachu extends Pokemon{
    constructor(nombre, tipo, edad){
        super(nombre, tipo);
        this.edad = edad;
    }
    evolucionar(){
        return console.log(`${this.nombre} esta evolucionando`)
    }
}

const Pikachu1 = new Pikachu("Juan", "Electrico", 3);
console.log(Pikachu1);

Pikachu1.atacar();//muestra que Juan esta atacando; erl objeto Pikachu1 creado con la clase Picachu, puede usar los metodos de la clase Pokemon porque la clase Pikachu heredo los metodos de Pokemon
Pikachu1.evolucionar();//muestra que evoluciona, porque esta usando el metodo evolucionar de la clase de la que nacio  que es la clase Pikachu

const Pokemon1 = new Pokemon ("Charmander", "Fuego");
Pokemon1.atacar();//pone lo mismo porque estamos usando la clase Pokemon
//Pokemon1.evolucionar();//da error porque esta usando la clase Padre Pokemon, no tiene el metodo evolucionar, ese metodo solo es de la clase Pikachu









//Si creamos una nueva clase (ejemplo electrico) con extend usando la clase Pikachu, esta nueva clase heredara los metodos de Pikachu y tambien los metodos del padre que es la clase Pokemon; no recomendable porque sobre cargas la memoria, recomendable solo dos niveles

class electrico extends Pikachu{
    constructor(nombre,tipo, edad, color){
        super(nombre, tipo, edad, color);
        this.color=color;
    }
}
const Electrico1 = new electrico("Panchito","Electrico",4, "Gris");

console.log(Electrico1);