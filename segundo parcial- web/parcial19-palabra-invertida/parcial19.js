const texto = document.querySelector("#palabra");
const btnInvertir = document.querySelector("#btnInvertir");
const textoResultado = document.querySelector("#resultado");

btnInvertir.addEventListener("click", () => {

    const palabra = String(texto.value);

    if (palabra === "") {
        textoResultado.textContent = "Debe ingresar una palabra";
        return;
    }
    
    const palabraIvertida = palabra.split("").reverse().join("");

    textoResultado.textContent = `Palabra invertida: ${palabraIvertida}`;


});