const numImput = document.querySelector("#numero");
const parrafo = document.querySelector("#mensaje");
const formulario = document.querySelector("#form-cubo");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = numImput.value;

    if (isNaN(numero) || numImput.value === "") {
        parrafo.textContent = "Por favor, ingrese un número válido.";
        return;
    } else {
        const cubo = Math.pow(numero, 3);
        parrafo.textContent = `El cubo de ${numero} es ${cubo}`;
    }

});