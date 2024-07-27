//Estos seran los EVENTOS DOM

// el nombre en ingles es ESCUCHADOR DE EVENTOS, por eso el LISTENER

// no le puedo a;adir un eventlistener a un array, solo se lo puedo a;adir a un ELEMENTO
// por esto se hace un for each o forof para recorrer el array y seleccionar cada elemento


//esta funcion esta en el atributo onclick de los titulos de seccion
function clicEnSeccion () {
    console.log('Has hecho click en un titulo de seccion');
}

//agregamos un detector de eventos
function clicEnSubtitulo() {
    console.log("Has hecho click en el Subtitulo");
}

let subtitulo = document.querySelector("h3")
subtitulo.addEventListener("click", clicEnSubtitulo)
//es la definiciond e una funcion por eso a clickEnSubtitulo no se le ponen parentesis.


// TODO: probar un onclick, un event listerner y otro event listener a una funcion diferente.
// probar que al hacer click en un parrafo cambie de color.
// probar cualquiera de los eventos que hay en w3schools.com en una seccion


function colorChange () {
    console.log('Prueba de que la funcion sirve');
    <style>
        color: blue;
    </style>
     
}

let texto = document.querySelectorAll("p")
texto.onclick(colorChange)