// Mostrar nombre en la caja
const mostrarNombre = document.querySelector("#resultado")
const ingresarNombre = document.querySelector("#nombre");

ingresarNombre.addEventListener("keyup", () => {
    mostrarNombre.textContent = ingresarNombre.value;
});

// Cambiar color de borde
const tarjeta = document.getElementById("tarjeta");
const colores = document.getElementById("color-borde");

colores.addEventListener("change", () => {
    tarjeta.classList.remove("rojo", "verde", "celeste", "violeta");
    tarjeta.classList.add(colores.value);
});

// Validaciones del formulario
const formulario = document.querySelector("#formulario");
const email = document.querySelector("#email");
const edad = document.getElementById("edad");
const mensaje = document.querySelector("#mensaje");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailIngresado = email.value;
    const edadIngresada = edad.value;

    if (!emailIngresado.includes("@")) {
        mensaje.textContent = "Debe ingresar un email valido";
        return;
    }

    if (edadIngresada < 18) {
        mensaje.textContent = "Debe ser mayor de edad";
        return;
    }

    const generoSeleccionda = document.querySelector("input[name='genero']:checked");

    if (generoSeleccionda == null) {
        mensaje.textContent = "Debe seleccionar un genero"
        return;
    }

    mensaje.textContent = "Registro realizado correctamente!";

})