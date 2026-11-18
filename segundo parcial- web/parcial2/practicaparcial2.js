const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const resultado = document.querySelector("#resultado");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {

    const numero1 = num1.value;
    const numero2 = num2.value;

    if (numero1 === "" || numero2 === "") {
        resultado.textContent = "Se deben ingresar ambos numeros";
        return;
    }

    const concatenacion = numero1 + numero2;
    resultado.textContent = `Concatenacion: ${concatenacion}`;
});