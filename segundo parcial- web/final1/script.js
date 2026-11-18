const universidad = document.querySelector("#universidad");
const titulo = document.querySelector("#titulo");

universidad.addEventListener("keyup", () => {
    titulo.textContent = universidad.value;
});

// Cambiar color de la caja con botones
const colores = document.querySelectorAll(".color");
const caja = document.querySelector(".segunda-seccion")

colores.forEach(boton => {
    boton.addEventListener("click", () => {
        caja.classList.remove("celeste","violeta","naranja");
        caja.classList.add(boton.value);
    })
});

// Resetear color
const restablecer = document.querySelector("#reset");

restablecer.addEventListener("click", () => {
    caja.classList.remove("celeste","violeta","naranja");
})