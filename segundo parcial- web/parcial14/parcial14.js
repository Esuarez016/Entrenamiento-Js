const numero = document.querySelector("#num");
const btn = document.querySelector("#btnParImpar");
const textoResultado = document.querySelector("#resultado");

btn.addEventListener("click", () => {

    const num = numero.value

    if (num === "") {
        textoResultado.textContent = "Debe ingresar un numero";
    }

    if (num % 2 === 0) {
        textoResultado.textContent = `${num} es Par`
    } else {
        textoResultado.textContent = `${num} es ImPar`
    }

});