console.log("Metodos arrays y strings")

//Los metodos son funciones asociados a un objeto, por lo tanto son como las propiedades.
//Son .metodo() en cambio las funciones van de prefijo ejemplo
//Objeto.toString()
//parseFloat(objeto)

//el .log y .table son metodos de "console"

//tanto los arrays como los strings son objetos iterables e indexados.

//veremos los metodos para objetos de este estilo.
//w3schools.com/js/js_strings_methods    ver el link en el README

//PROBAR STRING METODOS: .trim(), pad() , replace(), replaceall() , split(), to...case(), slice()
//Probar  ARRAYS metodos de busquedas indexof(), includes(), startwith(), endwith()
// uSAR LAS EXTENSIONES QUOKKA.js para ver las consolas aqu'i mismo en el VS

text = "  Esta es una string, que se ha escrito por el Omar, para hacer los ejercicios de la clase de metodo  "


console.log(text)

console.log("%cSe puede dar estilo CSS en la consola con ese simbolo seguido de la letra", "color: blue; font-weight: bold");

dni = "123456789A"
console.log("DNI completo:" + dni);
console.log("dni ofuscado:" + dni.slice(4).padStart(9, "X").slice(0 , -2).padEnd(9, "X"));

console.log(text.trim());
console.log(text.padStart(200,"5"));
console.log(text.padEnd(2,"3"));
console.log(text.replace("string", "cadena"));
console.log(text.replaceAll(" ", ";"));
console.log(text.split(",", 1));
console.log(text.toLowerCase(""));
console.log(text.toUpperCase(""));
console.log(text.slice(2 , 21));

// ! hacer un ejercicio en el que se censure el nombre del texto que se ha dado.


console.log(text.indexOf("el"));
x = text.substring(46, 51);
console.log(x);
x = x.slice(0, -4).padStart(5,"X");
console.log(x);

console.log(text.length);
primera = text.slice(0, 47);
segunda = text.slice(52, 102);

console.log(primera + x + segunda);
