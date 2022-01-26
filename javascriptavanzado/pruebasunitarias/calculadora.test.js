//hacer pruebas con const//require("./calculadora")
//requiere primero en git bash hacer tu package json con git init y escribes los datos
//INSTALA JEST: npm install --save-dev jest
//si ya esta solo poner npm install/ en la direccion donde este el package json

const {sumar, restar, multiplicar, dividir} = require("./calculadora");//sin extencion de js//meti sumar en {} porque lo exporte con {}

//describe es la descripcion de la prueba o nombre de la misma
describe("Pruebas en el componente calculadora", () =>{
    
    test("Pruebas en la funcion sumar", () => {
        expect(sumar(3,5)).toBe(8);
    })

    test("Pruebas en la funcion restar", () =>{
        expect(restar(5,3)).toBe(2);
    })

    test("Pruebas en la funcion multiplicar", () =>{
        expect(multiplicar(5,3)).toBe(15);
    })

    test("Pruebas en la funcion dividir", () =>{
        expect(dividir(10,2)).toBe(5);
    })

})

//en package json pon : "test": "jest"

//pon: npm run test en git bash


//para tener npm run test automatico despues de guardar pon en package json; "test": "jest jest --watchAll"