console.log(`Este es el JS de array`);

data = ["Dog","🐕", "pig", false, 23, true];

dog = "🐶";
cat = "🐱";
racoon = "🦝";
koala = "🐨";
pig = "🐷";

animals = [dog, cat, racoon, koala, pig, koala];

console.log(animals);

console.log(data[1]); 
//"podemos acceder a los elementos de un array usando su indice o posición"

console.log(`el arreglo tiene ${data.length} de elementos`);
numeros = [1, 2, 3, 4, 5]

a = 1;
b = 2;
c = 3;
d = 4;
e = 5;

numeros = [e, d, c, b ,a];

console.log(numeros);

console.log(numeros.length);

pares = [2, 4, 6, 8];
impares = [1, 3, 5 ,7]

suma = [pares, impares];

console.log(suma);

alumno = { //Definimos un objeto completamente
    nombre: "Manuel",
    apellido: "Rubial",
    edad: 37,
    hobby: "🕹",
    animals: [koala, animals[1]]
}

console.log(alumno);

console.log(`El alumno ${alumno.nombre} ${alumno.apellido} tiene ${alumno.edad} años de edad y su hobby es: ${alumno.hobby}`);

profe  = {} //Otra manera de ir definiendo un objeto

profe.nombre = "Omar"
profe.edad = 33

console.log(profe);

// CREAD UN ARRAY CON 5 OBJETOS DENTRO QUE TENGAN LAS MISMAS 4 PROPIEDADES
// CREAD UN ARRAY QUE CONTENGA UNA LISTA DE LAS PROPIEDADES DE LOS OBJETOS
// CREAD UNA VARIABLE QUE CONTENGA LA SUMA DE UNA PROPIEDAD
// MOSTRAR POR CONSOLA todo lo anterior
// Mostrar por consola una frase que resuma las propiedades de cada objeto.
// Buscar una manera de mostrar por consola todo lo anterior en forma de una tabla.


pokemon = [
    {
        num: 1;
        nombre: "Bulbasaur";
        nivel:  8;
        tipo: "Planta";
        ataques: ["Latigo cepa", "Placaje"]
    },
    {
        num: 6;
        nombre: "Charmander";
        nivel:  10;
        tipo: "Fuego";
        ataques: ["Scratch", "Ascuas"]
    },

    {
        num: 1;
        nombre: "Squirtle";
        nivel:  6;
        tipo: "Agua";
        ataques: ["Placaje", "Burbuja"]
    },

    {
        num: 1;
        nombre: "Pikachu";
        nivel:  25;
        tipo: "Electrico";
        ataques: ["rayo", "Swift"]
    },

    {
        num: 1;
        nombre: "Bulbasaur";
        nivel:  8;
        tipo: "Normal";
        ataques: ["Latigo", "Double team"]
    },

    
]

console.log();

console.table(); //Muy importante aprender esto!!!

