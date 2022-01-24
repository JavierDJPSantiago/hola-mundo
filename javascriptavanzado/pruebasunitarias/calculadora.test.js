//hacer pruebas con const//require("./calculadora")
//requiere primero en git bash hacer tu package json con git init y escribes los datos
//INSTALA JEST: npm install --save-dev jest


const {sumar} = require("./calculadora");//sin extencion de js//meti sumar en {} porque lo exporte con {}

//describe es la descripcion de la prueba o nombre de la misma
describe("Pruebas en el componente calculadora", () =>{
    test("Pruebas en la funcion sumar", () => {
        expect(sumar(3,5)).toBe(8);
    })
})

//en package json pon : "test": "jest"

//pon: npm run test en git bash