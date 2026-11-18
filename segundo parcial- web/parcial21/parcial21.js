const nombreGuardar = document.querySelector("#usuario");
const btnGuardar = document.querySelector("#btnGuardar");
const resultado = document.querySelector("#mensaje");

btnGuardar.addEventListener("click", () => {
    const user = nombreGuardar.value;

    if (user === "") {
        resultado.textContent = "Debe ingresar un usuario";
        return;
    }

    localStorage.setItem("usuario", user);

    resultado.textContent = `Usuario guardado: ${localStorage.getItem("usuario")}`;

});

// Para que quede guardado al recargar la pagina
const usuarioGuardado = localStorage.getItem("usuario");
if (usuarioGuardado){
    resultado.textContent = `Usuario guardado: ${usuarioGuardado}`;
}