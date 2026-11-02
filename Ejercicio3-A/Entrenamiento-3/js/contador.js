const numero = document.getElementById ("numero_clicks");

const sumar = document.getElementById ("sumar_click");

const reiniciar = document.getElementById ("reiniciar");

let contador = 0;
numero.textContent = contador;

sumar.addEventListener ("click", function() {
    contador++;
    numero.textContent = contador;
})


reiniciar.addEventListener ("click", function() {
    contador = 0;
    numero.textContent = contador;
});

console.log(numero,sumar,reiniciar );