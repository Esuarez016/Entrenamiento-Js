// Modal
const modal = document.getElementById("modal");
const textoModal = document.getElementById("modal-text");
const btnCerrarModal = document.getElementById("cerrar-modal");

// Boton ver pokemon
const btnVer = document.querySelectorAll(".ver-pokemon");

btnVer.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        textoModal.textContent = `Pokemon ${index + 1}`;
        modal.style.display = "block";
    });
});

btnCerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Habilitar boton combatir
const radio = document.getElementsByName("pokemon");
const btnCombatir = document.getElementById("btn-combatir");

radio.forEach(boton => {
    boton.addEventListener("change", () => {
        btnCombatir.disabled = false;
    });
});

btnCombatir.addEventListener("click", () => {
    const radioSeleccionado = document.querySelector("input[name='pokemon']:checked");

    const numeroPokemon = radioSeleccionado.value;

    localStorage.setItem("pokemonSeleccionado", `"Pokemon ${numeroPokemon}"`);

    window.location.href = "combate.html";

});