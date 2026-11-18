const numero1 = document.querySelector("#n1");
const numero2 = document.querySelector("#n2");
const btn = document.querySelector("#btnConcat");
const salida = document.querySelector("#salida");

btn.addEventListener("click", () => {
    const num1 = numero1.value;
    const num2 = numero2.value;

    if (num1 === "" || num2 === "") {
        salida.textContent = "Se deben ingresar ambos números";
    }

    const concatenacion = num1 + num2;
    salida.textContent = `Concatenacion: ${concatenacion}`;

});