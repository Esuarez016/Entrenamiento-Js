const contrasenia = document.querySelector("#pass");
const confirmarContrasenia = document.querySelector("#confirmPass");
const btnRegistrar = document.querySelector("#btnRegistrar");
const resultado = document.querySelector("#resultado");

btnRegistrar.addEventListener("click", () => {

    const pass = contrasenia.value;
    const confirmPass = confirmarContrasenia.value;

    if (pass === "" || confirmPass === "") {
        resultado.textContent = "Complete los dos campos";
        return;
    }

    if (pass === confirmPass) {
        resultado.textContent = "Contraseña registrada";
    } else {
        resultado.textContent = "Las contraseñas no coinciden";
    }

});