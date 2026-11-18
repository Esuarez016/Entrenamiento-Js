const nombreImput = document.querySelector("#nombre");
const btnVocal = document.querySelector("#btnVocal");
const textoResultado = document.querySelector("#resultado");

btnVocal.addEventListener("click", () => {
    const nombre = String(nombreImput.value);

    if (nombre === "") {
        textoResultado.textContent = "Debe ingresar un nombre";
        return;
    }

    const primeraLetra = nombre.toLowerCase();

    if (primeraLetra.startsWith("a") || primeraLetra.startsWith("e") || primeraLetra.startsWith("i") || primeraLetra.startsWith("o") || primeraLetra.startsWith("u")) {
        textoResultado.textContent = `${nombre} Empieza con una vocal`;
    } else {
        textoResultado.textContent = `${nombre} No empieza con una vocal`;
    }

});