animal = prompt("¿cuál es tu animal?")
animal = animal.toLowerCase();
animal = animal.trim();
function instruccionesPerro(mascota){
    
    console.log("1.-Debes dar de comer a diario al " + mascota);
    console.log("2.- Debes sacar a pasear al " + " " + mascota + " " + " para que haga sus necesidades");
    console.log("3.- Debes darle amor a diario");
}

function instruccionesGato(mascota){
    console.log("1.-Debes dar de comer a diario al " + mascota);
    console.log("2.- Debes sacar a pasear al " + " " + mascota + " " + " para que haga sus necesidades");
    console.log("3.- Debes darle amor a diario");
    console.log("4.- Entiende que él es el amo de la casa y tú si propiedad");
    console.log("5.- Compra juguetitos, al final jugará con la caja");
}

if (animal == "perro") {
    animal = "🐕";
    console.log("Las intrucciones para cuidarlo son: ");
    instruccionesPerro(animal);
}
else if (animal == "gato") {
    animal = "🐈";
    console.log("Las intrucciones para cuidarlo son: ");
    instruccionesGato(animal);
}