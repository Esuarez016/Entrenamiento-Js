const texto = document.querySelector("#texto");
const contador = document.querySelector("#contador");

texto.addEventListener("keydown", () => {
    const longitud = texto.value.length;
    contador.textContent = `${longitud} : Caracteres`;
});