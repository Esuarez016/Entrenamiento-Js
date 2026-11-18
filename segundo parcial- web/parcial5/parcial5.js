const num1 = document.querySelector("#a");
const num2 = document.querySelector("#b");
const btn = document.querySelector("#btn");
const resultado = document.querySelector("#info");

btn.addEventListener("click", () => {

    const numero1 = num1.value;
    const numero2 = num2.value;

    if (numero1 === "" || numero2 === "") {
        resultado.textContent = "Debe ingresar ambos números";
        return;
    }

    if (numero1 > numero2) {
        resultado.textContent = "El primer numero es mayor";
    } else if (numero1 < numero2) {
        resultado.textContent = "El segundo numero es mayor";
    } else {
        resultado.textContent = "Ambos numeros son iguales";
    }

});