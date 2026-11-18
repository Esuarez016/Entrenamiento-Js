const texto = document.getElementById("texto");
const textoResultado = document.getElementById("texto-resultado");

texto.addEventListener("keyup", () => {
    textoResultado.textContent = texto.value;
});

const colores = document.getElementById("opcion-fondo");
const caja = document.querySelector(".caja");

colores.addEventListener("change", () => {
    caja.classList.remove("rojo", "celeste", "verde", "amarillo");
    caja.classList.add(colores.value);
});

const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    const nombre = String(inputNombre.value.trim());
    if (nombre.length < 4) {
        mensaje.textContent = "El nombre debe tener al menos 4 caracteres!"
        return;
    }

    const provincia = document.querySelector("input[name='provincia']:checked")
    if (provincia == null){
        mensaje.textContent = "Debe seleccionar una provincia!"
        return;
    }

    mensaje.textContent = "Usuario registrado correctamente!"

});