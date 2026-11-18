const textoPokemon = document.querySelector("#pokemon");
const btnVolver = document.querySelector("#btn-volver");

const pokemonGuardado = localStorage.getItem("pokemonSeleccionado");

if (pokemonGuardado) {
    textoPokemon.textContent = pokemonGuardado;
} else {
    textoPokemon.textContent = "No seleccionaste ningun pokemon";
}

btnVolver.addEventListener("click", () => {
    window.location.href = "index.html";
});