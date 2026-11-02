const haceClick = document.getElementById("hace_click");

const texto = document.getElementById("faltan_clicks");

const para_ganar = document.getElementById("clicks_para_ganar");

let numero_clicks = 5 + Math.floor(Math.random() * 6);


texto.textContent = "Faltan clicks " + numero_clicks + " para ganar: ";


haceClick.addEventListener("click", function () {

    if (numero_clicks > 0) {
        numero_clicks--;
        texto.textContent = "Faltan clicks " + numero_clicks + " para ganar: ";
    }
    if (numero_clicks === 1) {
        para_ganar.textContent = "A un click de ganar!";

    }
    if (numero_clicks === 0 && haceClick.textContent === "Reiniciar") {
        numero_clicks = 5 + Math.floor(Math.random() * 6);
        texto.textContent = "Faltan clicks " + numero_clicks + " para ganar: ";
        para_ganar.textContent = "";
        haceClick.textContent = "HACÉ CLICK";
    }

    else if (numero_clicks === 0) {
        texto.textContent = "¡FELICITACIONES!";
        para_ganar.textContent = "Ganaste!";
        haceClick.textContent = "Reiniciar";

    }
}
);
