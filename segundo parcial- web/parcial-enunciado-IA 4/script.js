// PRIMERA SECCION
const btnAplicar = document.getElementById("btnAplicar");
const inputPelicula = document.getElementById("pelicula");
const titulo = document.getElementById("titulo");
const resultado = document.getElementById("mensaje");

btnAplicar.addEventListener("click", () => {
    const nombrePelicula = String(inputPelicula.value.trim());
    const colorSeleccionado = document.querySelector("input[name='color']:checked")

    if (nombrePelicula === "") {
        resultado.textContent = "Debe ingresar un nombre de una película!";
        return;
    }

    if (nombrePelicula.length < 3) {
        resultado.textContent = "El nombre de la película debe tener al menos 3 carácteres!";
        return;
    }

    if (colorSeleccionado == null) {
        resultado.textContent = "Debe seleccionar un color para el título!";
        return;
    }

    titulo.textContent = nombrePelicula;
    titulo.classList.remove("rojo", "azul", "verde");
    titulo.classList.add(colorSeleccionado.value);

});

// SEGUNDA SECCION
const nombre = document.getElementById("nombre");
const genero = document.getElementById("genero");
const btnGuardar = document.getElementById("btnGuardar");
const resultadoGuardar = document.getElementById("resultado-guardar");
const btnMostrar = document.getElementById("btnMostrar");
const lista = document.getElementById("lista");

const peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

btnGuardar.addEventListener("click", () => {
    const nombrePeli = String(nombre.value.trim());

    if (nombrePeli === "") {
        resultadoGuardar.textContent = "Debe ingresar un nombre de una película!";
        return;
    }

    if (nombrePeli.length < 3) {
        resultadoGuardar.textContent = "El nombre de la película debe tener al menos 3 carácteres!";
        return;
    }

    if (genero.value === "") {
        resultadoGuardar.textContent = "Debe seleccionar un género!";
        return;
    }

    const pelicula = {
        nombre: nombrePeli,
        genero: genero.value,
    };

    peliculas.push(pelicula);
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
    resultadoGuardar.textContent = "Película guardada correctamente!"

    nombre.value = ""
    genero.value = "";

});

btnMostrar.addEventListener("click", () => {
    lista.innerHTML = "";

    const peliculasGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];

    peliculasGuardadas.forEach((pelicula) => {
        const nuevaPelicula = document.createElement("li");
        nuevaPelicula.textContent = `${pelicula.nombre} - ${pelicula.genero}`;
        lista.appendChild(nuevaPelicula);
    });
});