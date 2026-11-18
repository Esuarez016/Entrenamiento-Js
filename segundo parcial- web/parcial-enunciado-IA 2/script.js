// Lista de compras
const producto = document.querySelector("#nombre-producto");
const btnAgregar = document.querySelector("#btnAgregar");
const lista = document.querySelector("#lista");

btnAgregar.addEventListener("click", () => {

    const nombreProducto = producto.value.trim();

    if (nombreProducto === "") {
        alert("Debe ingresar un producto");
        return;
    }

    const nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = nombreProducto;
    lista.appendChild(nuevoProducto);

    producto.value = ""; // limpia el input *

});

// Formulario
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const contrasenia = document.getElementById("contrasenia");
const turno = document.getElementById("opciones-turno");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    mensaje.textContent = "";

    const nombreIngresado = nombre.value.trim();
    const contraseniaIngresada = contrasenia.value.trim();

    if (nombreIngresado.length < 4) {
        mensaje.textContent = "El nombre debe tener al menos 4 caracteres!";
        return;
    }

    if (contraseniaIngresada.length < 6) {
        mensaje.textContent = "La contraseña debe tener al menos 6 caracteres!";
        return;
    }

    if (turno.value === "") {
        mensaje.textContent = "Debe seleccionar un turno!";
        return;
    }

    mensaje.textContent = "Registro realizado correctamente!";

})