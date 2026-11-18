const numero = document.querySelector("#num");
const btn = document.querySelector("#btnDoble");
const resultado = document.querySelector("#resultado");

btn.addEventListener("click", () => {

    const num = numero.value;

    if (num === "") {
        resultado.textContent = "Debe ingresar un numero valido";
        return;
    }

    const resultadoDoble = num * 2;
    resultado.textContent = `El doble de ${num} es ${resultadoDoble}`;

}); 