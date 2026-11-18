const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const btn = document.querySelector("#btnConcat");
const resultado1 = document.querySelector("#resultado1");
const resultado2 = document.querySelector("#resultado2");
const resultado = document.querySelector("#concatenacion");

btn.addEventListener("click", () => {
    const num1 = numero1.value;
    const num2 = numero2.value;

    if (num1 === "" || num2 === "") {
        resultado.textContent = "Se deben ingresar ambos números"
    }

    resultado1.textContent = `Numero1: ${num1}`;
    resultado2.textContent = `Numero2: ${num2}`;

    const concatenacion = num1 + num2;
    resultado.textContent = `Concatenacion: ${concatenacion}`

});