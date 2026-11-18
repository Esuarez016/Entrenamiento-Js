const btnSaludar = document.querySelector("#btnSaludar");
const textoResultado = document.querySelector("#resultado");

btnSaludar.addEventListener("click", () => {
    const fecha = new Date();
    const hora = fecha.getHours();

    if (hora >= 6 && hora <= 12) {
        textoResultado.textContent = "Buenos dias";
    } else if (hora >= 12 && hora <= 20) {
        textoResultado.textContent = "Buenas tardes";
    } else {
        textoResultado.textContent = "Buenas noches";
    }

});