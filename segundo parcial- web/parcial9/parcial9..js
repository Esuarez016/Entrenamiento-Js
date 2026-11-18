const numero = document.querySelector("#numero");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

btn.addEventListener("click", () => {
    const num = numero.value;

    if (num === "" || isNaN(num)) {
        resultado.textContent = "Ingrese un numero valido";
        return;
    }

    const cubo = Math.pow(num, 3);
    resultado.textContent = `${num} al cubo es: ${cubo}`;

});