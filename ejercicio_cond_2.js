nom = prompt("¿cuál es tu nombre?")
nom = nom.trim();
nom = nom.toLowerCase();
nom = nom.split(" ");
function nombre (a){
    if (a.length > 1){
        console.log("Tienes un nombre compuesto");
    }
    else{
        console.log("Tienes un nombre simple");
    }
}

nombre(nom);