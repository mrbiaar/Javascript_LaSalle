//strings

var userName = "Manuel";
userSurename = "Rubial";
//con acento abierto es una Template literal.
userTitle = `Knight`; 



const espacio = " ";
// {
//let variable = varifun
//con let, la variable solo existe dentro de las llaves
// }

console.log(userName);
console.log(userSurename);
console.log(userTitle);

console.log(userName, userSurename, userTitle);

console.log(userTitle + " " + userName + " " + userSurename);

console.log(`¿Qué tal estás, ${userName}, ${userSurename}`);

a = 1;
b = 2;

// TODO: afegiu codi

console.log(a,b); // 2, 1

c = a;
d = b;

a = d;
b = c;

console.log(a,b);

// TODO: arrays,


const PI = "3,14150"
radi =4

console.log("El radio del circulo es:" PI*radi**2);

cercle = {

   // radi: 4:
   // area: PI*this.radi**2 + "metros cuadrados" el THIS hace referencia a una propiedad del mismo objto que defino
   area: PI*radi**2 + "metros cuadrados"
}

console.log(parseFloat(cercle.area));

//TRANSFORMACION DE TIPOS DE VARIABLES:

//toString()  esto se coloca al final de cada dato, para que me lo regrese en forma de string.
//parseFloat() funcion para que me regrese los decimales del numero,
//parseInt() tambien existe, es igual al anterior.
//typeof es una palabra reservada de JS y como funcion me dice que tipo de dato es.
//en JS no hay floats, solo int y big ints.
//Los arrays usan [] mientras que los objetos se declaran con {}
//Puedo tener arrays de objetos
//Puedo tener objetos que contegan arrays???