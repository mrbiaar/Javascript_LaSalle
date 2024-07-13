num_1 = prompt("Introduzca el primer número:");
num_2 = prompt("Introduzca el segundo número:");
operador = prompt("introduzca el símbolo de la operación deseada:");
num_1 = num_1.trim();
num_2 = num_2.trim();
num_1 = parseInt(num_1);
num_2 = parseInt(num_2)

function calculador(a, b) {
    if (operador == "+") {
        operacion = a + b;
        return operacion
    }
    else if (operador == "-") {
        operacion = a - b;
        return operacion
    }
    else if (operador == "*"){
        operacion = a*b;
        return operacion
    }
    else if (operador == "/") {
        operacion = a/b;
        return operacion
        
    }
    else {
        console.log("No es un operador válido");
    }
}

//COMPROBAMOS QUE SEAN NUMEROS

console.log("El resultado es: " + calculador(num_1, num_2));
