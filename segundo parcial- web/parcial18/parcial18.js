const numero1 = document.querySelector("#num1");
const numero2 = document.querySelector("#num2");
const btnSumar = document.querySelector("#btnSumar");
const resultado = document.querySelector("#resultado");

btnSumar.addEventListener("click", () => {

    const num1 = numero1.value;
    const num2 = numero2.value;

    if (num1 === "" || num2 === "") {
        resultado.textContent = "Debe ingresar ambos numeros";
    }

    const suma = Number(num1) + Number(num2);
    resultado.textContent = `El resultado es: ${suma}`;


});