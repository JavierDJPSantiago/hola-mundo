const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);// tocontainer ver si ese dato se agrego al arreglo
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);//.not.toContain(user); not es para decir que no esta el usuario
  });

test("findByEmail user Controller", () =>{
  let email = "Carlos.jesus.edu.mx";
  let user = new User(123213, "Carlos Eduardo", email);
  userController.add(user);
  expect(userController.findByEmail(email)).toEqual(user);
});

test("findById user Controller", () =>{
  let Id = 123213;
  let user = new User(Id, "Carlos Eduardo", "Carlos.jesus.edu.mx");
  userController.add(user);
  expect(userController.findById(Id)).toEqual(user);//toequal hace comparacion de los valores de un objetos y to be hace comparacion de un valor
});
