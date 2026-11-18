const numero1 = document.querySelector("#num1");
const numero2 = document.querySelector("#num2");
const btnComparar = document.querySelector("#btnComparar");
const resultado = document.querySelector("#resultado");

btnComparar.addEventListener("click", () => {
    const num1 = numero1.value
    const num2 = numero2.value

    if (num1 === "" || num2 === "") {
        resultado.textContent = "Debe ingresar ambos numeros";
        return;
    }

    if (num1 > num2) {
        resultado.textContent = "El numero 1 es mayor que el numero 2";
    } else if (num2 > num1) {
        resultado.textContent = "El numero 2 es mayor que el numero 1";
    } else {
        resultado.textContent = "Ambos numeros son iguales";
    }

});