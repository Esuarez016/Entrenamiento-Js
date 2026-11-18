const numero1 = document.querySelector("#num1");
const numero2 = document.querySelector("#num2");
const btn = document.querySelector("#btnMultiplicar");
const resultado = document.querySelector("#resultado");

btn.addEventListener("click", () => {

    const num1 = numero1.value;
    const num2 = numero2.value;

    if (num1 === "" || num2 === "") {
        resultado.textContent = "Se deben ingresar ambos números";
    }

    const resultadoMultiplicacion = num1 * num2;
    resultado.textContent = `Resultado: ${resultadoMultiplicacion}`;

});