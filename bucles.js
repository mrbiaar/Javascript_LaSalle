//TODO: escribe un bucle que muestr los numeros del 1 al 20 y  uestre a su lado "hola" si es multiplo de 2, 
// o muestre "adeu" si es multiplo de 3 y muestre "que tal"? se es multiplo de 5.

for ( let i = 1; i < 21; i++) {

    let missatge = i;
    if (i % 2 === 0) missatge += " hola";
    if (i % 3 === 0) missatge += " adeu";
    if (i % 5 === 0) missatge += " que tal?"
    console.log(missatge);
}
//TODO: escribe un bucle que se miestre 10 veces un mensaje por erro por la consola con el text
//en color rojo y azul alternativamente.

for(let i = 0; i< 10; i++) {

    if (i % 2 == 0) console.log("%cHolis soy un mensaje azul" , "color: blue")
    else console.log("%cHolis soy un mensaje rojo", "color: red");
}
//TODO: un contador que muestre en la consola los numeros del 1 al
// numero introducido como parametro (hasta 1000 como maximo.)

// TODO: hacer un contador que nada mas muestre los numeros que tengan un digito contenido
// en la string definida por el usuario (con promt) hasta el 100.
// (p.e el 234 muestra: 2, 3, 4, 12, 13,14 ,20, 21, 22, 23..., 47, 48, 49, 52, 53, 54,...)

//TODO:llista de la compra, Fes que un promt es repeteixi fins que l'usuari introduexi una palaura clau 
// (useu BREAK) fins llaveros, cada palaura intrduida sera un item de la llista de la compra, que s'escriuira
//despres de que l'usuari l'aturi mab el format:

//    -Llista de la compra>
//     -pa
//     -Mantenga
//     -Aigua
