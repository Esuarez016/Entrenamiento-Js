const numero1 = document.querySelector("#num1")
const numero2 = document.querySelector("#num2")
const btn = document.querySelector("#btnComparar");
const resultado = document.querySelector("#resultado");

btn.addEventListener("click", () => {
    const num1 = numero1.value;
    const num2 = numero2.value;

    if (num1 === "" || num2 === "") {
        resultado.textContent = "Debe ingresar ambos valores"
    }

    if (num1 > num2) {
        resultado.textContent = `El numero: ${num1} es mayor que el numero: ${num2}`;
    } else if (num1 < num2) {
        resultado.textContent = `El numero: ${num2} es mayor que el numero: ${num1}`;
    } else {
        resultado.textContent = "Ambos numeros son iguales";
    }

});