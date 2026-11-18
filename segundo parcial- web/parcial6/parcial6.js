const numero1 = document.querySelector("#num1");
const numero2 = document.querySelector("#num2");
const numero3 = document.querySelector("#num3");
const btn = document.querySelector("#btnPromedio");
const resultado = document.querySelector("#resultado");

btn.addEventListener("click", () => {
    const num1 = Number(numero1.value);
    const num2 = Number(numero2.value);
    const num3 = Number(numero3.value);

    if (num1 === "" || num2 === "" || num3 == "" || num1 <= 0 || num2 <= 0 || num3 <= 0) {
        resultado.textContent = "Todos los números deben ser mayores a 0";
        return;
    }

    const promedio = (num1 + num2 + num3) / 3;

    resultado.textContent = `Promedio ${promedio}`;

});