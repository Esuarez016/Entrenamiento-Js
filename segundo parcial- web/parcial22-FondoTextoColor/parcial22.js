const textoModificar = document.querySelector(".articulo1");

// Cambiar texto
const opcionesTexto = document.getElementsByName("curso");

opcionesTexto.forEach((opcion) => {
    opcion.addEventListener("click", () => {
        textoModificar.innerHTML = opcion.value;
    });
});

// Cambiar color de texto
const opcionColorTexto = document.querySelector("#colores-texto");

opcionColorTexto.addEventListener("click", () => {
    textoModificar.classList.remove("rojo", "verde", "amarillo");
    textoModificar.classList.add(opcionColorTexto.value);
});

// Cambiar color de fondo
const opcionColorFondo = document.getElementsByName("fondo");

opcionColorFondo.forEach((opcion) => {
    opcion.addEventListener("click", () => {
        textoModificar.classList.remove("verde-fondo","violeta-fondo","naranja-fondo");
        textoModificar.classList.add(opcion.value);
    });
});
